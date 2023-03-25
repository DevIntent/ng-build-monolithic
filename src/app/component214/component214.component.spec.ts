import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Component214Component } from './component214.component';

describe('Component214Component', () => {
  let component: Component214Component;
  let fixture: ComponentFixture<Component214Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Component214Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Component214Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
