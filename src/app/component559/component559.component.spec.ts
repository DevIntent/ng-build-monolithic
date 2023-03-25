import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Component559Component } from './component559.component';

describe('Component559Component', () => {
  let component: Component559Component;
  let fixture: ComponentFixture<Component559Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Component559Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Component559Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
