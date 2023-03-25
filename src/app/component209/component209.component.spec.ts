import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Component209Component } from './component209.component';

describe('Component209Component', () => {
  let component: Component209Component;
  let fixture: ComponentFixture<Component209Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Component209Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Component209Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
