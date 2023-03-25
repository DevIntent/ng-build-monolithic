import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Component64Component } from './component64.component';

describe('Component64Component', () => {
  let component: Component64Component;
  let fixture: ComponentFixture<Component64Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Component64Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Component64Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
