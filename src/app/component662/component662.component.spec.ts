import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Component662Component } from './component662.component';

describe('Component662Component', () => {
  let component: Component662Component;
  let fixture: ComponentFixture<Component662Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Component662Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Component662Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
