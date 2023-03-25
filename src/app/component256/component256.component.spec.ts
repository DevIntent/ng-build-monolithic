import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Component256Component } from './component256.component';

describe('Component256Component', () => {
  let component: Component256Component;
  let fixture: ComponentFixture<Component256Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Component256Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Component256Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
