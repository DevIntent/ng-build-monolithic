import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Component848Component } from './component848.component';

describe('Component848Component', () => {
  let component: Component848Component;
  let fixture: ComponentFixture<Component848Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Component848Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Component848Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
