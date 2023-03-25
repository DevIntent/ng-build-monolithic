import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Component945Component } from './component945.component';

describe('Component945Component', () => {
  let component: Component945Component;
  let fixture: ComponentFixture<Component945Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Component945Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Component945Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
