import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Component479Component } from './component479.component';

describe('Component479Component', () => {
  let component: Component479Component;
  let fixture: ComponentFixture<Component479Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Component479Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Component479Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
