import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Component993Component } from './component993.component';

describe('Component993Component', () => {
  let component: Component993Component;
  let fixture: ComponentFixture<Component993Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Component993Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Component993Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
