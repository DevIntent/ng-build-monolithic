import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Component928Component } from './component928.component';

describe('Component928Component', () => {
  let component: Component928Component;
  let fixture: ComponentFixture<Component928Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Component928Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Component928Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
