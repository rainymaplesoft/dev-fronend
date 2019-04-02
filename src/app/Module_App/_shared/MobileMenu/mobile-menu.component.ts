import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { EventService } from '../services/event.service';
import { EventName } from '../../config';
import { hoverScaleAnimation } from '../animation';

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
export class MobileMenuComponent implements OnInit {
  @Input()
  menu: IMenuItem[];
  @Input()
  isShowHeader: boolean;

  mobileMenuState = 'side';
  showImgOverlay = 'none';
  hoverState = 'mouseleave'; // mouseleave/moseenter

  constructor(private router: Router, private eventService: EventService) { }

  ngOnInit() {
    this.mobileMenuState = this.isShowHeader ? 'head' : 'side';
  }

  toggleMobileMenu() {
    this.eventService.pub(EventName.Event_MobileToggleClicked);
    this.mobileMenuState = this.mobileMenuState === 'side' ? 'head' : 'side';
    // this.containerState = this.mobileMenuState === 'hide' ? 'normal' : 'right';
  }

  nav(route: string, param?: string) {
    if (route) {
      this.router.navigate([route], { queryParams: { group: param } });
    }
  }

  setMouseState(p: string) {
    this.hoverState = p;
    this.showImgOverlay = p === 'mouseenter' ? 'block' : 'none';
  }
}
