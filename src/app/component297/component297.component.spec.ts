import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Component297Component } from './component297.component';

describe('Component297Component', () => {
  let component: Component297Component;
  let fixture: ComponentFixture<Component297Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Component297Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Component297Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
