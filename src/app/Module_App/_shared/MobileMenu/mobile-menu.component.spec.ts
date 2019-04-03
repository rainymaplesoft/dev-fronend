import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppMaterialModule } from 'src/app/material.modual';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MobileMenuComponent, MenuItemComponent } from '.';
import { EventService } from '../services/event.service';
import { RouterModule } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';

describe('MobileMenuComponent', () => {
  let component: MobileMenuComponent;
  let fixture: ComponentFixture<MobileMenuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [BrowserModule, RouterTestingModule,
        BrowserAnimationsModule, AppMaterialModule],
      declarations: [MobileMenuComponent, MenuItemComponent],
      providers: [EventService, RouterModule]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MobileMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
