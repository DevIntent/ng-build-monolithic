import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Component564Component } from './component564.component';

describe('Component564Component', () => {
  let component: Component564Component;
  let fixture: ComponentFixture<Component564Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Component564Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Component564Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
