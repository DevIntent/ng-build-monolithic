import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Component322Component } from './component322.component';

describe('Component322Component', () => {
  let component: Component322Component;
  let fixture: ComponentFixture<Component322Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Component322Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Component322Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
