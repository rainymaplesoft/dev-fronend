import { convertToParamMap, ParamMap, Params } from '@angular/router';
import { ReplaySubject, Observable, EMPTY, Subject } from 'rxjs';


/*
  usage:
  TestBed.configureTestingModule({
    providers:[
      {provide: Router, useClass: RouterStub},
      {provide: ActivatedRoute, useClass: ActivatedRouteStub},
    ]
  });

*/


/**
 * An ActivateRoute test double with a `paramMap` observable.
 * Use the `setParamMap()` method to add the next `paramMap` value.
 */
export class ActivatedRouteStub {
  // Use a ReplaySubjectParamMap to share previous values with subscribers
  // and pump new values into the `paramMap` observable
  private subjectParamMap = new ReplaySubject<ParamMap>();
  private subjectParams = new Subject<ParamMap>();
  params: Observable<any> = EMPTY;

  constructor(initialParams?: Params) {
    this.setParamMap(initialParams);
  }

  /** The mock paramMap observable */
  readonly paramMap = this.subjectParamMap.asObservable();

  /** Set the paramMap observables's next value */
  setParamMap(params?: Params) {
    this.subjectParamMap.next(convertToParamMap(params));
  }

  set param(param: any) {
    this.subjectParams.next(param);
  }
  get param() {
    return this.subjectParams.asObservable();
  }

/* usage:
  it('should navigate to not-found page when param.id==0),()=>{
    let router = TestBed.get(Router);           // here the Router is the RouterStub
    let route = TestBed.get(ActivatedRouter);   // here the Route is the ActivatedRouterStub
    let spy = spyOn(router, 'navigate');
    route.param({id:0});
    expect(spy).toHaveBeenCalledWith(['not-found']);
  })
*/
}

export class RouterStub {

  constructor() {
  }

  navigate(params) { }

  /* usage:
    it('should redirect to the user page after saving),()=>{
      let router = TestBed.get(Router);   // here the Router is the RouterStub
      let spy = spyOn(router, 'navigate');
      component.save();
      expect(spy).toHaveBeenCalledWith(['user']);
    })
  */
}
