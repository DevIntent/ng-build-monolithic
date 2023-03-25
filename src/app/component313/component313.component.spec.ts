import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Component313Component } from './component313.component';

describe('Component313Component', () => {
  let component: Component313Component;
  let fixture: ComponentFixture<Component313Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Component313Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Component313Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
