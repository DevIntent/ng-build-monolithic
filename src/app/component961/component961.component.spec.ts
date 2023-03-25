import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Component961Component } from './component961.component';

describe('Component961Component', () => {
  let component: Component961Component;
  let fixture: ComponentFixture<Component961Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Component961Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Component961Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
