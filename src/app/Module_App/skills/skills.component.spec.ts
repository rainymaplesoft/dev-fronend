import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SkillsComponent } from './skills.component';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppMaterialModule } from 'src/app/material.modual';
import { ActivatedRouteStub } from '../_shared/activatedRoute.stub';
import { ActivatedRoute } from '@angular/router';

describe('SkillsComponent', () => {
  let component: SkillsComponent;
  let fixture: ComponentFixture<SkillsComponent>;
  let activatedRouteStub: ActivatedRouteStub;

  //  spyOn(usersService, 'findOne').and.returnValue(of(userResponse));

  beforeEach(async(() => {
    activatedRouteStub = new ActivatedRouteStub();
    TestBed.configureTestingModule({
      imports: [BrowserModule,
        BrowserAnimationsModule, AppMaterialModule],
      declarations: [SkillsComponent],
      providers: [{ provide: ActivatedRoute, useValue: activatedRouteStub }]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    activatedRouteStub.setParamMap({ group: 'front' });
    fixture = TestBed.createComponent(SkillsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
