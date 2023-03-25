import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Component205Component } from './component205.component';

describe('Component205Component', () => {
  let component: Component205Component;
  let fixture: ComponentFixture<Component205Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Component205Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Component205Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
