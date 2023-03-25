import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Component445Component } from './component445.component';

describe('Component445Component', () => {
  let component: Component445Component;
  let fixture: ComponentFixture<Component445Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Component445Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Component445Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
