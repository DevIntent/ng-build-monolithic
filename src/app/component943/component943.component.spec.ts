import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Component943Component } from './component943.component';

describe('Component943Component', () => {
  let component: Component943Component;
  let fixture: ComponentFixture<Component943Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Component943Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Component943Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
