import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Component378Component } from './component378.component';

describe('Component378Component', () => {
  let component: Component378Component;
  let fixture: ComponentFixture<Component378Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Component378Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Component378Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
