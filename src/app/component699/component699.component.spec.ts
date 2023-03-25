import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Component699Component } from './component699.component';

describe('Component699Component', () => {
  let component: Component699Component;
  let fixture: ComponentFixture<Component699Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Component699Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Component699Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
