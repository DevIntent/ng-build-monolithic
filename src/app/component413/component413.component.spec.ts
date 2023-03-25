import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Component413Component } from './component413.component';

describe('Component413Component', () => {
  let component: Component413Component;
  let fixture: ComponentFixture<Component413Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Component413Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Component413Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
