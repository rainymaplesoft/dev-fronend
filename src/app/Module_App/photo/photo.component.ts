import { Component, OnInit } from '@angular/core';
import { fadeInAnimation } from '../_shared/animation';

@Component({
  selector: 'photo',
  templateUrl: './photo.component.html',
  styleUrls: ['./photo.component.scss'],
  animations: [fadeInAnimation]
})
export class PhotoComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  getPic(pic: string) {
    return `assets/img/${pic}.jpg`;
  }
}
