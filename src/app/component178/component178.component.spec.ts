import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Component178Component } from './component178.component';

describe('Component178Component', () => {
  let component: Component178Component;
  let fixture: ComponentFixture<Component178Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Component178Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Component178Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
