import { Component, OnInit, Input, AfterViewInit } from '@angular/core';
import { Router, ActivatedRoute, NavigationStart } from '@angular/router';
import { from } from 'rxjs';
import { filter } from 'rxjs/operators';
import { EventService } from '../services/event.service';
import { EventName } from '../../config';
import { hoverScaleAnimation } from '../animation';
import { AppService } from '../services/app.service';

export interface IMenuItem {
  menu_text: string;
  sub_menu?: IMenuItem[];
  route?: string;
  show_submenu?: boolean;
  isLink?: boolean;
  param?: string;
}

@Component({
  selector: 'mobile-menu',
  templateUrl: 'mobile-menu.component.html',
  styleUrls: ['mobile-menu.component.scss'],
  animations: [hoverScaleAnimation]
})
export class MobileMenuComponent implements OnInit, AfterViewInit {

  @Input()
  menu: IMenuItem[];
  @Input()
  isShowHeader: boolean;

  isFront = true;
  cvLink: string;
  mobileMenuState = 'side';
  showImgOverlay = 'none';
  hoverState = 'mouseleave'; // mouseleave/moseenter

  constructor(private router: Router, private route: ActivatedRoute,
    private eventService: EventService, private appService: AppService) { }

  ngOnInit() {
    this.mobileMenuState = this.isShowHeader ? 'head' : 'side';
    this.router.events.pipe(filter(event => event instanceof NavigationStart)).subscribe(c => {
      this.isFront = this.appService.isFrontEnd(location.href);
      if (!this.isFront) {
        this.cvLink = 'https://docs.google.com/document/d/1_BAFvVl2NMKuglJEfkdO46s3OKWx2miIQBxNRJcLkV0/edit?usp=sharing';
      } else {
        // front
        this.cvLink = 'https://docs.google.com/document/d/1p4xpiX-3f1DbFQpeIbHSH934CcGFAAiZJlRtIokcPO0/edit?usp=sharing';
      }
    });
  }
  ngAfterViewInit(): void {
  }
  toggleMobileMenu() {
    this.eventService.pub(EventName.Event_MobileToggleClicked);
    this.mobileMenuState = this.mobileMenuState === 'side' ? 'head' : 'side';
    // this.containerState = this.mobileMenuState === 'hide' ? 'normal' : 'right';
  }

  nav(route: string, param?: string) {
    if (!route) {
      return;
    }
    if (route) {
      route = this.isFront ? `/fe${route}` : `/fs${route}`;
      this.router.navigate([route], { queryParams: { group: param } });
    }
  }

  setMouseState(p: string) {
    this.hoverState = p;
    this.showImgOverlay = p === 'mouseenter' ? 'block' : 'none';
  }
}
