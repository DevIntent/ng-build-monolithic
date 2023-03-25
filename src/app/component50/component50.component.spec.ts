import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Component50Component } from './component50.component';

describe('Component50Component', () => {
  let component: Component50Component;
  let fixture: ComponentFixture<Component50Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Component50Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Component50Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
