import { Component, OnInit } from '@angular/core';
import { fadeInAnimation } from '../_shared/animation';

@Component({
  selector: 'skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss'], animations: [fadeInAnimation]
})
export class SkillsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
