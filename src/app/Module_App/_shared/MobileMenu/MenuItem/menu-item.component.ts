import { Component, OnInit, Input } from '@angular/core';
import { IMenuItem } from '../mobile-menu.component';
import { EventName } from '../../../config';
import { rotateAnimate, pullUpDownAnimate } from '../../animation';
import { EventService } from '../../services/event.service';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'menu-item',
  templateUrl: 'menu-item.component.html',
  styleUrls: ['menu-item.component.scss'],
  animations: [rotateAnimate, pullUpDownAnimate]
})
export class MenuItemComponent implements OnInit {
  @Input()
  menuItem: IMenuItem;

  arrowState = 'right'; // right/down
  subMenuState = 'hide'; // hide/show

  constructor(private eventService: EventService) { }

  ngOnInit() {
    if (this.menuItem && this.menuItem.show_submenu) {
      this.arrowState = 'right';
      this.subMenuState = 'show';
      return;
    }
    this.arrowState = 'down';
    this.subMenuState = 'hide';

  }

  onItemClick() {
    if (!this.menuItem) {
      return;
    }
    if (this.menuItem.sub_menu) {
      this.onArrowClick();
    } else {
      this.eventService.pub<IMenuItem>(
        EventName.Event_MenuItemClicked,
        {
          menu_text: this.menuItem.menu_text,
          route: this.menuItem.route,
          isLink: this.menuItem.isLink,
          param: this.menuItem.param
        }

      );
      sessionStorage.setItem('__activeMenuItem__', this.menuItem.menu_text);
    }
  }

  get isActiveMenuItem() {
    const activeMenuItem = sessionStorage.getItem('__activeMenuItem__');
    return activeMenuItem === (this.menuItem ? this.menuItem.menu_text : '');
  }

  onArrowClick() {
    this.subMenuState = this.arrowState === 'right' ? 'hide' : 'show';
    this.arrowState = this.arrowState === 'right' ? 'down' : 'right';
  }
}
