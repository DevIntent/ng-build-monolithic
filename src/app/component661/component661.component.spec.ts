import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Component661Component } from './component661.component';

describe('Component661Component', () => {
  let component: Component661Component;
  let fixture: ComponentFixture<Component661Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Component661Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Component661Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
