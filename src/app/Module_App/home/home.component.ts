import { Component, OnInit } from '@angular/core';
import { Config } from '../config';
import { trigger, state, transition, style, animate } from '@angular/animations';
import { Observable, fromEvent, Subscription } from 'rxjs';
import { map, filter, tap } from 'rxjs/operators';
import { fadeInAnimation } from '../_shared/animation';

const menuSlideAnimate =
  // trigger name for attaching this animation to an element using the [@triggerName] syntax
  trigger('menuSlideAnimate', [
    state('show', style({ left: '0' })),
    state('hide', style({ left: '-240px' })),
    transition('show => hide', animate('200ms')),
    transition('hide => show', animate('200ms'))
  ]);
const containerSlideAnimate =
  // trigger name for attaching this animation to an element using the [@triggerName] syntax
  trigger('containerSlideAnimate', [
    state('normal', style({ left: '0' })),
    state('right', style({ left: '240px' })),
    transition('normal => right', animate('200ms')),
    transition('right => normal', animate('200ms'))
  ]);
const slideInAnimation = trigger('slideInAnimation', [
  transition(':enter', [style({ transform: 'translateX(-50px)' }),
  animate('.3s', style({ transform: 'translateX(0)' }))
  ])
]);
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  animations: [fadeInAnimation, menuSlideAnimate, containerSlideAnimate, slideInAnimation]
})
export class HomeComponent implements OnInit {
  imgPortfolio = `/assets/img/portfolio.jpg`;
  imgEdplan = `/assets/img/Edplan01.jpg`;
  imgIeponline = `/assets/img/ieponline01.jpg`;
  imgSkopus = `/assets/img/skopus01.jpg`;
  imgSkovision = `/assets/img/skovision.jpg`;
  imgEasyRmts = `/assets/img/easyRmts.jpg`;
  imgHomeroom = `/assets/img/homeroom.jpg`;
  imgCoris = `/assets/img/coris.jpg`;
  constructor() { }

  ngOnInit() {
    window.scroll(0, 0);
  }

}
