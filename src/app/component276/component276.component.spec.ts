import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Component276Component } from './component276.component';

describe('Component276Component', () => {
  let component: Component276Component;
  let fixture: ComponentFixture<Component276Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Component276Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Component276Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
