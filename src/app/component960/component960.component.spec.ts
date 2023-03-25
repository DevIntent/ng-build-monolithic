import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Component960Component } from './component960.component';

describe('Component960Component', () => {
  let component: Component960Component;
  let fixture: ComponentFixture<Component960Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Component960Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Component960Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
