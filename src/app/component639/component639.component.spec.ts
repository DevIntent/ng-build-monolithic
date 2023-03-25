import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Component639Component } from './component639.component';

describe('Component639Component', () => {
  let component: Component639Component;
  let fixture: ComponentFixture<Component639Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Component639Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Component639Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
