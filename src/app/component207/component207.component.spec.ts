import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Component207Component } from './component207.component';

describe('Component207Component', () => {
  let component: Component207Component;
  let fixture: ComponentFixture<Component207Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Component207Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Component207Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
