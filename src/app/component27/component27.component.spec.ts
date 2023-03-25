import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Component27Component } from './component27.component';

describe('Component27Component', () => {
  let component: Component27Component;
  let fixture: ComponentFixture<Component27Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Component27Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Component27Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
