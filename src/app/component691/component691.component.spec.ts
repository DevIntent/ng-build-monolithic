import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Component691Component } from './component691.component';

describe('Component691Component', () => {
  let component: Component691Component;
  let fixture: ComponentFixture<Component691Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Component691Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Component691Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
