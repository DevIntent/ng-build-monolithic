import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Component920Component } from './component920.component';

describe('Component920Component', () => {
  let component: Component920Component;
  let fixture: ComponentFixture<Component920Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Component920Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Component920Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
