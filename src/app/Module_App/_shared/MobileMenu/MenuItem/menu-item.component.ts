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
    if (this.menuItem.sub_menu) {
      this.arrowState = 'down';
      this.subMenuState = 'show';
      return;
    }
    this.arrowState = 'right';
    this.subMenuState = 'hide';

  }

  onItemClick() {
    if (this.menuItem.sub_menu) {
      this.onArrowClick();
    } else {
      this.eventService.pub<string>(
        EventName.Event_MenuItemClicked,
        this.menuItem.action
      );
    }
  }

  onArrowClick() {
    this.arrowState = this.arrowState === 'right' ? 'down' : 'right';
    this.subMenuState = this.arrowState === 'right' ? 'hide' : 'show';
  }
}