import { Component, OnInit } from '@angular/core';
import { fadeInAnimation } from '../_shared/animation';
import { ActivatedRoute } from '@angular/router';
import { AppService } from '../_shared/services/app.service';

@Component({
  selector: 'aboutme',
  templateUrl: './aboutme.component.html',
  styleUrls: ['./aboutme.component.scss'], animations: [fadeInAnimation]
})
export class AboutmeComponent implements OnInit {

  isFront = false;

  constructor(private route: ActivatedRoute, private appService: AppService) { }

  ngOnInit() {
    this.isFront = this.appService.isFrontEnd();
  }

}
