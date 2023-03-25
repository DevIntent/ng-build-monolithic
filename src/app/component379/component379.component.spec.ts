import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Component379Component } from './component379.component';

describe('Component379Component', () => {
  let component: Component379Component;
  let fixture: ComponentFixture<Component379Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Component379Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Component379Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
