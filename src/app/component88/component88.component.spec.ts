import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Component88Component } from './component88.component';

describe('Component88Component', () => {
  let component: Component88Component;
  let fixture: ComponentFixture<Component88Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Component88Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Component88Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
