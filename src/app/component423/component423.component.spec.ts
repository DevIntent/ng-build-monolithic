import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Component423Component } from './component423.component';

describe('Component423Component', () => {
  let component: Component423Component;
  let fixture: ComponentFixture<Component423Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Component423Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Component423Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
