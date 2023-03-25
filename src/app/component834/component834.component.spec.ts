import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Component834Component } from './component834.component';

describe('Component834Component', () => {
  let component: Component834Component;
  let fixture: ComponentFixture<Component834Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Component834Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Component834Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
