import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Component644Component } from './component644.component';

describe('Component644Component', () => {
  let component: Component644Component;
  let fixture: ComponentFixture<Component644Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Component644Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Component644Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
