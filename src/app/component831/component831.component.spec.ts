import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Component831Component } from './component831.component';

describe('Component831Component', () => {
  let component: Component831Component;
  let fixture: ComponentFixture<Component831Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Component831Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Component831Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
