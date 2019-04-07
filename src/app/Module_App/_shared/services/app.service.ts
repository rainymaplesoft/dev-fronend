import { Injectable } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Injectable()
export class AppService {

  constructor() { }

  public isFrontEnd(loc?: string) {
    if (loc) {
      return loc.indexOf('/fe/') > 0;
    }
    return location.href.indexOf('/fe/') > 0;
  }
  // public isFrontEnd(route: ActivatedRoute) {
  //   return route && route.url && route.url['value'] && route.url['value'][0]
  //     && route.url['value'][0]['path'] === 'fe';
  // }
}
