/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { EditUserprofileComponent } from './edit-userprofile.component';

describe('EditUserprofileComponent', () => {
  let component: EditUserprofileComponent;
  let fixture: ComponentFixture<EditUserprofileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditUserprofileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditUserprofileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
