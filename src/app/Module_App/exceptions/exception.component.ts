import { Component, OnInit } from '@angular/core';
import { slideInDownAnimation } from '../_shared/animation';
import { Router, ActivatedRoute } from '@angular/router';
import { ErrorCode } from '../config';
import { AppService } from '../_shared/services/app.service';

@Component({
  selector: 'app-notfound',
  templateUrl: './exception.component.html',
  styleUrls: ['./exception.component.scss'],
  animations: [slideInDownAnimation]
})

export class ExceptionComponent {
  errorCode = '404';
  message = 'Page Not Found';
  navigateRoute = '';
  isFront = true;

  constructor(private router: Router, private route: ActivatedRoute, private appService: AppService) {
    this.route.params.subscribe((params) => {
      this.errorCode = params['errorCode'];
      this.navigateRoute = params['navigateRoute'];
      switch (this.errorCode) {
        case ErrorCode.ServerError:            // 500
          this.message = 'Server Error';
          break;
        case ErrorCode.Unauthorized:        // 401,403
          this.message = 'Unauthorized';
          break;
        default:                            // 404
          this.message = 'Page Not Found';
          this.errorCode = '404';
          break;
      }
    });
    this.isFront = this.appService.isFrontEnd();
  }
  navigateHome() {
    if (this.navigateRoute) {
      this.router.navigate([this.navigateRoute]);
    } else {
      if (this.isFront) {
        this.router.navigate(['/fe/about']);
      }
    }
  }
  /**/
}
