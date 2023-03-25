import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Component424Component } from './component424.component';

describe('Component424Component', () => {
  let component: Component424Component;
  let fixture: ComponentFixture<Component424Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Component424Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Component424Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
