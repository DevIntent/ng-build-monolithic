import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Component306Component } from './component306.component';

describe('Component306Component', () => {
  let component: Component306Component;
  let fixture: ComponentFixture<Component306Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Component306Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Component306Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
