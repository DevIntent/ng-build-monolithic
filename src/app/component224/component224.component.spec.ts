import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Component224Component } from './component224.component';

describe('Component224Component', () => {
  let component: Component224Component;
  let fixture: ComponentFixture<Component224Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Component224Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Component224Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
