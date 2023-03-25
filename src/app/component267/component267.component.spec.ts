import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Component267Component } from './component267.component';

describe('Component267Component', () => {
  let component: Component267Component;
  let fixture: ComponentFixture<Component267Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Component267Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Component267Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
