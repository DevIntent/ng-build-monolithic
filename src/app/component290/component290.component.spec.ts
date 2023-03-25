import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Component290Component } from './component290.component';

describe('Component290Component', () => {
  let component: Component290Component;
  let fixture: ComponentFixture<Component290Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Component290Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Component290Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
