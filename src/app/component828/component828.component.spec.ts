import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Component828Component } from './component828.component';

describe('Component828Component', () => {
  let component: Component828Component;
  let fixture: ComponentFixture<Component828Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Component828Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Component828Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
