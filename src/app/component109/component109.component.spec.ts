import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Component109Component } from './component109.component';

describe('Component109Component', () => {
  let component: Component109Component;
  let fixture: ComponentFixture<Component109Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Component109Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Component109Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
