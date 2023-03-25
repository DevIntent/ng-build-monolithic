import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Component307Component } from './component307.component';

describe('Component307Component', () => {
  let component: Component307Component;
  let fixture: ComponentFixture<Component307Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Component307Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Component307Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
