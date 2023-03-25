import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Component545Component } from './component545.component';

describe('Component545Component', () => {
  let component: Component545Component;
  let fixture: ComponentFixture<Component545Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Component545Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Component545Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
