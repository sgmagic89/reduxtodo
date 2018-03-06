/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { MytodosComponent } from './mytodos.component';

describe('MytodosComponent', () => {
  let component: MytodosComponent;
  let fixture: ComponentFixture<MytodosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MytodosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MytodosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
