import { Component, OnInit } from '@angular/core';
import { fadeInAnimation } from '../_shared/animation';

@Component({
  selector: 'aboutme',
  templateUrl: './aboutme.component.html',
  styleUrls: ['./aboutme.component.scss'], animations: [fadeInAnimation]
})
export class AboutmeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
