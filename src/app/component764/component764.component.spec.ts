import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Component764Component } from './component764.component';

describe('Component764Component', () => {
  let component: Component764Component;
  let fixture: ComponentFixture<Component764Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Component764Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Component764Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
