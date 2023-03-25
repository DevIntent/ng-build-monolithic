import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Component937Component } from './component937.component';

describe('Component937Component', () => {
  let component: Component937Component;
  let fixture: ComponentFixture<Component937Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Component937Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Component937Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
