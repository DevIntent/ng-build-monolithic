import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Component774Component } from './component774.component';

describe('Component774Component', () => {
  let component: Component774Component;
  let fixture: ComponentFixture<Component774Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Component774Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Component774Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
