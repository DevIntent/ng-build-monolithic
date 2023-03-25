import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Component827Component } from './component827.component';

describe('Component827Component', () => {
  let component: Component827Component;
  let fixture: ComponentFixture<Component827Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Component827Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Component827Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
