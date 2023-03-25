import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Component368Component } from './component368.component';

describe('Component368Component', () => {
  let component: Component368Component;
  let fixture: ComponentFixture<Component368Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Component368Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Component368Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
