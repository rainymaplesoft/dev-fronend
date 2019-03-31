import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { EventService } from '../services/event.service';
import { EventName } from '../../config';

export interface IMenuItem {
  menu_text: string;
  sub_menu?: IMenuItem[];
  action?: string;
  show_submenu?: boolean;
}

@Component({
  selector: 'mobile-menu',
  templateUrl: 'mobile-menu.component.html',
  styleUrls: ['mobile-menu.component.scss']
})
export class MobileMenuComponent implements OnInit {
  @Input()
  menu: IMenuItem[];
  @Input()
  isShowSettings: boolean;
  mobileMenuState = 'hide';

  constructor(private router: Router, private eventService: EventService) { }

  ngOnInit() {
    // from MobileMenu
    this.eventService
      .on<string>(EventName.Event_MobileToggleClicked)
      .subscribe(r => {
        this.toggleMobileMenu();
      });
  }

  toggleMobileMenu() {
    this.mobileMenuState = this.mobileMenuState === 'hide' ? 'show' : 'hide';
    // this.containerState = this.mobileMenuState === 'hide' ? 'normal' : 'right';
  }
  nav(route: string, withClubId?: boolean) { }
}
