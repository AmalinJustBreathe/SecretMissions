/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { MissionRowComponent } from './mission-row.component';

describe('MissiosRowComponent', () => {
  let component: MissionRowComponent;
  let fixture: ComponentFixture<MissionRowComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MissionRowComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MissionRowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
