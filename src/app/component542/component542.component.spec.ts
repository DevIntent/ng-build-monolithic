import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Component542Component } from './component542.component';

describe('Component542Component', () => {
  let component: Component542Component;
  let fixture: ComponentFixture<Component542Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Component542Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Component542Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
