import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Component505Component } from './component505.component';

describe('Component505Component', () => {
  let component: Component505Component;
  let fixture: ComponentFixture<Component505Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Component505Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Component505Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
