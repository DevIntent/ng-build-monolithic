import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Component805Component } from './component805.component';

describe('Component805Component', () => {
  let component: Component805Component;
  let fixture: ComponentFixture<Component805Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Component805Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Component805Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
