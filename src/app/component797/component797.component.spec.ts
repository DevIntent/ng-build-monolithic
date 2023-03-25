import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Component797Component } from './component797.component';

describe('Component797Component', () => {
  let component: Component797Component;
  let fixture: ComponentFixture<Component797Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Component797Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Component797Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
