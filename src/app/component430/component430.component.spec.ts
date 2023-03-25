import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Component430Component } from './component430.component';

describe('Component430Component', () => {
  let component: Component430Component;
  let fixture: ComponentFixture<Component430Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Component430Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Component430Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
