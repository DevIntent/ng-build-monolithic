import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Component362Component } from './component362.component';

describe('Component362Component', () => {
  let component: Component362Component;
  let fixture: ComponentFixture<Component362Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Component362Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Component362Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
