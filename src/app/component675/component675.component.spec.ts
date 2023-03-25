import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Component675Component } from './component675.component';

describe('Component675Component', () => {
  let component: Component675Component;
  let fixture: ComponentFixture<Component675Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Component675Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Component675Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
