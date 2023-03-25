import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Component426Component } from './component426.component';

describe('Component426Component', () => {
  let component: Component426Component;
  let fixture: ComponentFixture<Component426Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Component426Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Component426Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
