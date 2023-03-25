import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Component677Component } from './component677.component';

describe('Component677Component', () => {
  let component: Component677Component;
  let fixture: ComponentFixture<Component677Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Component677Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Component677Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
