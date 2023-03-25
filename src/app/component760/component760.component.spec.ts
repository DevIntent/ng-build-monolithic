import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Component760Component } from './component760.component';

describe('Component760Component', () => {
  let component: Component760Component;
  let fixture: ComponentFixture<Component760Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Component760Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Component760Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
