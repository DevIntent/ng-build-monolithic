import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Component919Component } from './component919.component';

describe('Component919Component', () => {
  let component: Component919Component;
  let fixture: ComponentFixture<Component919Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Component919Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Component919Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
