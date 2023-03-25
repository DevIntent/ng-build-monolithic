import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Component456Component } from './component456.component';

describe('Component456Component', () => {
  let component: Component456Component;
  let fixture: ComponentFixture<Component456Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Component456Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Component456Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
