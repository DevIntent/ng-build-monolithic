import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Component696Component } from './component696.component';

describe('Component696Component', () => {
  let component: Component696Component;
  let fixture: ComponentFixture<Component696Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Component696Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Component696Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
