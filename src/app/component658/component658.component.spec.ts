import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Component658Component } from './component658.component';

describe('Component658Component', () => {
  let component: Component658Component;
  let fixture: ComponentFixture<Component658Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Component658Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Component658Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
