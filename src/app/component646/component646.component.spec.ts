import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Component646Component } from './component646.component';

describe('Component646Component', () => {
  let component: Component646Component;
  let fixture: ComponentFixture<Component646Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Component646Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Component646Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
