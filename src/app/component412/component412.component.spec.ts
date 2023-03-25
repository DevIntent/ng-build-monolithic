import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Component412Component } from './component412.component';

describe('Component412Component', () => {
  let component: Component412Component;
  let fixture: ComponentFixture<Component412Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Component412Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Component412Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
