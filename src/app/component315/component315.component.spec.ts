import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Component315Component } from './component315.component';

describe('Component315Component', () => {
  let component: Component315Component;
  let fixture: ComponentFixture<Component315Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Component315Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Component315Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
