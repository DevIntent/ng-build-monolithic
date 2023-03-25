import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Component599Component } from './component599.component';

describe('Component599Component', () => {
  let component: Component599Component;
  let fixture: ComponentFixture<Component599Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Component599Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Component599Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
