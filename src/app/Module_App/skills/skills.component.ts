import { Component, OnInit } from '@angular/core';
import { fadeInAnimation } from '../_shared/animation';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss'], animations: [fadeInAnimation]
})
export class SkillsComponent implements OnInit {

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.queryParams.subscribe((param) => {
      if (!param) {
        return;
      }
      const id = param['group'];
      if (!id) {
        return;
      }
      const el = document.getElementById(id);
      if (!el) {
        return;
      }
      if (id === 'front') {
        // el.scrollTop = 0;
        document.getElementById('mainContainer').scrollTop = 0;
        return;
      }
      // el.scrollTop = 0;
      // el.scrollIntoView({ behavior: 'smooth' });
      el.scrollIntoView(true);
      // el.scrollTop -= 150;
    });
  }

}
