import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Component56Component } from './component56.component';

describe('Component56Component', () => {
  let component: Component56Component;
  let fixture: ComponentFixture<Component56Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Component56Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Component56Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
