import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Component609Component } from './component609.component';

describe('Component609Component', () => {
  let component: Component609Component;
  let fixture: ComponentFixture<Component609Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Component609Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Component609Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
