import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Component574Component } from './component574.component';

describe('Component574Component', () => {
  let component: Component574Component;
  let fixture: ComponentFixture<Component574Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Component574Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Component574Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
