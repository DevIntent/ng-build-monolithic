import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Component119Component } from './component119.component';

describe('Component119Component', () => {
  let component: Component119Component;
  let fixture: ComponentFixture<Component119Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Component119Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Component119Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
