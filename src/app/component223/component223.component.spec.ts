import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Component223Component } from './component223.component';

describe('Component223Component', () => {
  let component: Component223Component;
  let fixture: ComponentFixture<Component223Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Component223Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Component223Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
