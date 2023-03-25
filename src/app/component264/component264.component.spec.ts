import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Component264Component } from './component264.component';

describe('Component264Component', () => {
  let component: Component264Component;
  let fixture: ComponentFixture<Component264Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Component264Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Component264Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
