import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Component455Component } from './component455.component';

describe('Component455Component', () => {
  let component: Component455Component;
  let fixture: ComponentFixture<Component455Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Component455Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Component455Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
