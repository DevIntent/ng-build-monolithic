import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Component801Component } from './component801.component';

describe('Component801Component', () => {
  let component: Component801Component;
  let fixture: ComponentFixture<Component801Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Component801Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Component801Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
