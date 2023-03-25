import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Component429Component } from './component429.component';

describe('Component429Component', () => {
  let component: Component429Component;
  let fixture: ComponentFixture<Component429Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Component429Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Component429Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
