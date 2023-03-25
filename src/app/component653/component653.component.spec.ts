import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Component653Component } from './component653.component';

describe('Component653Component', () => {
  let component: Component653Component;
  let fixture: ComponentFixture<Component653Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Component653Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Component653Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
