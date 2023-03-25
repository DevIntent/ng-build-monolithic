import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Component881Component } from './component881.component';

describe('Component881Component', () => {
  let component: Component881Component;
  let fixture: ComponentFixture<Component881Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Component881Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Component881Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
