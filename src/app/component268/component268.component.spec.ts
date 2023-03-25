import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Component268Component } from './component268.component';

describe('Component268Component', () => {
  let component: Component268Component;
  let fixture: ComponentFixture<Component268Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Component268Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Component268Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
