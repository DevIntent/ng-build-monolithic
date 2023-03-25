import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Component279Component } from './component279.component';

describe('Component279Component', () => {
  let component: Component279Component;
  let fixture: ComponentFixture<Component279Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Component279Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Component279Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
