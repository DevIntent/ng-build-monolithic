import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Component90Component } from './component90.component';

describe('Component90Component', () => {
  let component: Component90Component;
  let fixture: ComponentFixture<Component90Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Component90Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Component90Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
