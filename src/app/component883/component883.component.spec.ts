import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Component883Component } from './component883.component';

describe('Component883Component', () => {
  let component: Component883Component;
  let fixture: ComponentFixture<Component883Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Component883Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Component883Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
