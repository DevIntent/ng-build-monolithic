import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Component833Component } from './component833.component';

describe('Component833Component', () => {
  let component: Component833Component;
  let fixture: ComponentFixture<Component833Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Component833Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Component833Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
