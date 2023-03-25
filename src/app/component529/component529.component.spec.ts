import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Component529Component } from './component529.component';

describe('Component529Component', () => {
  let component: Component529Component;
  let fixture: ComponentFixture<Component529Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Component529Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Component529Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
