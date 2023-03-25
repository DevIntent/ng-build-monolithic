import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Component246Component } from './component246.component';

describe('Component246Component', () => {
  let component: Component246Component;
  let fixture: ComponentFixture<Component246Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Component246Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Component246Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
