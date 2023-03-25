import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Component671Component } from './component671.component';

describe('Component671Component', () => {
  let component: Component671Component;
  let fixture: ComponentFixture<Component671Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Component671Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Component671Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
