import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Component891Component } from './component891.component';

describe('Component891Component', () => {
  let component: Component891Component;
  let fixture: ComponentFixture<Component891Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Component891Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Component891Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
