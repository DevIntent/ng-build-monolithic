import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Component454Component } from './component454.component';

describe('Component454Component', () => {
  let component: Component454Component;
  let fixture: ComponentFixture<Component454Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Component454Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Component454Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
