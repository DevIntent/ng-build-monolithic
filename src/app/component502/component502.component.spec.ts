import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Component502Component } from './component502.component';

describe('Component502Component', () => {
  let component: Component502Component;
  let fixture: ComponentFixture<Component502Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Component502Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Component502Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
