import { Component, OnInit } from '@angular/core';
import { Config } from '../config';
import { trigger, state, transition, style, animate } from '@angular/animations';
import { Observable, fromEvent, Subscription } from 'rxjs';
import { map, filter, tap } from 'rxjs/operators';

export interface IWindowResizeInfo {
  isLessThanBreakpoint: boolean;
  width?: number;
  isCrossed?: boolean;
}

const menuSlideAnimate =
  // trigger name for attaching this animation to an element using the [@triggerName] syntax
  trigger('menuSlideAnimate', [
    state('show', style({ left: '0' })),
    state('hide', style({ left: '-240px' })),
    transition('show => hide', animate('200ms')),
    transition('hide => show', animate('200ms'))
  ]);
const menuFalldownAnimate = trigger('menuFalldownAnimate', [
  state('show', style({ transform: 'translate3d(0, 0, 0)', visibility: 'visible' })),
  state('hide', style({ transform: 'translate3d(-100%, -100%, 0)', visibility: 'hidden' })),
  transition('show => hide', animate('400ms ease-in-out')),
  transition('hide => show', animate('400ms ease-in-out'))
]);
const menuToggleAnimate = trigger('menuToggleAnimate', [
  state('show', style({ transform: 'translate3d(320px, 0, 0)' })),
  state('hide', style({ transform: 'translate3d(0, 0, 0)' })),
  transition('show => hide', animate('400ms ease-in-out')),
  transition('hide => show', animate('400ms ease-in-out'))
]);
const containerSlideAnimate =
  // trigger name for attaching this animation to an element using the [@triggerName] syntax
  trigger('containerSlideAnimate', [
    state('normal', style({ left: '0' })),
    state('right', style({ left: '240px' })),
    transition('normal => right', animate('200ms')),
    transition('right => normal', animate('200ms'))
  ]);

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  animations: [menuSlideAnimate, containerSlideAnimate, menuFalldownAnimate, menuToggleAnimate]
})
export class HomeComponent implements OnInit {
  title = 'cmms';
  mobileMenuState = 'show'; // hide/show
  containerState = 'normal'; // normal/right
  mobileMenu = Config.MobileMenu;
  isShowSettings = true;
  private _window_privious_width: number;
  windowSubscription: Subscription;
  constructor() { }

  ngOnInit() {
    this.windowSubscription = this.windowResize().subscribe(windowInfo => {
      if (windowInfo.isCrossed && !windowInfo.isLessThanBreakpoint) {
        this.toggleMobileMenu('show');
        return;
      }
      if (windowInfo.isCrossed && windowInfo.isLessThanBreakpoint) {
        this.toggleMobileMenu('hide');
        return;
      }
    });
  }

  toggleMobileMenu(toggle: string) {
    if (toggle === 'hide') {
      this.mobileMenuState = 'hide';
      return;
    } if (toggle === 'show') {
      this.mobileMenuState = 'show';
      return;
    }
    this.mobileMenuState = this.mobileMenuState === 'hide' ? 'show' : 'hide';
    this.containerState = this.mobileMenuState === 'hide' ? 'normal' : 'right';
  }

  containerClick(event: MouseEvent) {
    const toggleButtonId = 'mobile-menu-toggle';
    if (
      event.srcElement.id === toggleButtonId ||
      event.srcElement.parentElement.id === toggleButtonId
    ) {
      return;
    }
    if (this.mobileMenuState === 'show') {
      this.mobileMenuState = 'hide';
      this.containerState = 'normal';
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
