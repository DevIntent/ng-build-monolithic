import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Component623Component } from './component623.component';

describe('Component623Component', () => {
  let component: Component623Component;
  let fixture: ComponentFixture<Component623Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Component623Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Component623Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
