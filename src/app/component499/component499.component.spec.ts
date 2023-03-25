import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Component499Component } from './component499.component';

describe('Component499Component', () => {
  let component: Component499Component;
  let fixture: ComponentFixture<Component499Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Component499Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Component499Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
