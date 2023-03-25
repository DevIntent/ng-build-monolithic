import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Component951Component } from './component951.component';

describe('Component951Component', () => {
  let component: Component951Component;
  let fixture: ComponentFixture<Component951Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Component951Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Component951Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
