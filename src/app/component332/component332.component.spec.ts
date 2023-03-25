import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Component332Component } from './component332.component';

describe('Component332Component', () => {
  let component: Component332Component;
  let fixture: ComponentFixture<Component332Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Component332Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Component332Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
