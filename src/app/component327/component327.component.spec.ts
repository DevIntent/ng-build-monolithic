import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Component327Component } from './component327.component';

describe('Component327Component', () => {
  let component: Component327Component;
  let fixture: ComponentFixture<Component327Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Component327Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Component327Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
