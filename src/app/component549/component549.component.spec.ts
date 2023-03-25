import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Component549Component } from './component549.component';

describe('Component549Component', () => {
  let component: Component549Component;
  let fixture: ComponentFixture<Component549Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Component549Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Component549Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
