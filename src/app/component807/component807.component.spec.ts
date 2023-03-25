import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Component807Component } from './component807.component';

describe('Component807Component', () => {
  let component: Component807Component;
  let fixture: ComponentFixture<Component807Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Component807Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Component807Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
