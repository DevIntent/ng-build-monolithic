import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Component544Component } from './component544.component';

describe('Component544Component', () => {
  let component: Component544Component;
  let fixture: ComponentFixture<Component544Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Component544Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Component544Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
