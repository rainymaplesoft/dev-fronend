import { Component, OnInit } from '@angular/core';
import { EventService } from './Module_App/_shared/services/event.service';
import { EventName, Config } from './Module_App/config';
import { trigger, state, transition, style, animate } from '@angular/animations';
import { Observable, fromEvent, Subscription } from 'rxjs';
import { map, filter, tap } from 'rxjs/operators';
import { Router, ActivatedRoute } from '@angular/router';
import RouteName from './routename';
import { IMenuItem } from './Module_App/_shared/MobileMenu';
export interface IWindowResizeInfo {
  isLessThanBreakpoint: boolean;
  width?: number;
  isCrossed?: boolean;
}

const menuFalldownAnimate = trigger('menuFalldownAnimate', [
  state('head', style({ width: '100%' })),
  state('side', style({ width: '320px' })),
  transition('head => side', animate('400ms ease-in-out')),
  transition('side => head', animate('400ms ease-in-out'))
]);
const menuToggleAnimate = trigger('menuToggleAnimate', [
  state('show', style({ 'margin-left': '320px' })),
  state('hide', style({ 'margin-left': '0' })),
  transition('show => hide', animate('400ms ease-in-out')),
  transition('hide => show', animate('400ms ease-in-out'))
]);
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [menuFalldownAnimate, menuToggleAnimate]
})
export class AppComponent implements OnInit {
  title = 'portfolio';
  mobileMenuState = 'show'; // hide/show
  containerState = 'normal'; // normal/right
  mobileMenu = Config.MobileMenuFE;
  isShowSettings = true;
  private _window_privious_width: number;
  windowSubscription: Subscription;
  isShowSideBar = false;

  constructor(private router: Router, private route: ActivatedRoute, private eventService: EventService) { }

  onActivate(event, mainContainer) {
    if (mainContainer) {
      mainContainer.scrollTop = 0;
    }
  }

  ngOnInit() {
    if (location.href.indexOf('/fe/')) {
      this.mobileMenu = Config.MobileMenuFE;
    } else {
      this.mobileMenu = Config.MobileMenuFS;
    }
    this.eventService
      .on<string>(EventName.Event_MobileToggleClicked)
      .subscribe(r => {
        this.toggleMobileMenu();
      });
    this.eventService
      .on<IMenuItem>(EventName.Event_MenuItemClicked)
      .subscribe(r => {
        this.onMenuItemClicked(r);
      });
    const breakpoint = 960;
    const isLessThanBreakpoint = window.innerWidth < breakpoint;
    this.isShowSideBar = !isLessThanBreakpoint;

    this.windowSubscription = this.windowResize().subscribe(windowInfo => {
      if (windowInfo.isCrossed && !windowInfo.isLessThanBreakpoint) {
        this.isShowSideBar = true;
        return;
      }
      if (windowInfo.isCrossed && windowInfo.isLessThanBreakpoint) {
        this.isShowSideBar = false;
        return;
      }
    });
  }

  toggleMobileMenu(toggle?: string) {
    this.isShowSideBar = !this.isShowSideBar;
  }

  containerClick(event: MouseEvent) {
    const toggleButtonId = 'mobile-menu-toggle';
    // if (

    // ) {
    //   return;
    // }
    return;
    if (this.mobileMenuState === 'show') {
      this.mobileMenuState = 'hide';
      this.containerState = 'normal';
    }
  }
  onMenuItemClicked(item: IMenuItem) {
    if (item) {
      if (item.isLink) {
        return;
      }
      this.router.navigate([item.route], { queryParams: { group: item.param } });
      // this.router.navigate([item.route, item.param]);
    }
  }

  windowResize(breakpoint: number = 960): Observable<IWindowResizeInfo> {
    const windowInfo = fromEvent(window, 'resize').pipe(
      map(e => {
        return {
          width: window.innerWidth,
          isLessThanBreakpoint: false,
          isCrossed: false
        };
      }),
      tap(value => {
        const isLessThanBreakpoint = this._window_privious_width < breakpoint;

        value.isCrossed =
          (isLessThanBreakpoint && window.innerWidth >= breakpoint) ||
          (!isLessThanBreakpoint && window.innerWidth < breakpoint);
        value.isLessThanBreakpoint = window.innerWidth < breakpoint;

        this._window_privious_width = window.innerWidth;
      }),
      filter(value => value.isCrossed)
    );

    return windowInfo;
  }
}
