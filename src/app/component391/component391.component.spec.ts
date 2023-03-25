import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Component391Component } from './component391.component';

describe('Component391Component', () => {
  let component: Component391Component;
  let fixture: ComponentFixture<Component391Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Component391Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Component391Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
