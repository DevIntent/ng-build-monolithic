import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Component613Component } from './component613.component';

describe('Component613Component', () => {
  let component: Component613Component;
  let fixture: ComponentFixture<Component613Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Component613Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Component613Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
