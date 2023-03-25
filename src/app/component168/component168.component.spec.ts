import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Component168Component } from './component168.component';

describe('Component168Component', () => {
  let component: Component168Component;
  let fixture: ComponentFixture<Component168Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Component168Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Component168Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
