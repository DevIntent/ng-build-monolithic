import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Component234Component } from './component234.component';

describe('Component234Component', () => {
  let component: Component234Component;
  let fixture: ComponentFixture<Component234Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Component234Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Component234Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
