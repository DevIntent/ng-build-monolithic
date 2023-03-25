import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Component292Component } from './component292.component';

describe('Component292Component', () => {
  let component: Component292Component;
  let fixture: ComponentFixture<Component292Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Component292Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Component292Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
