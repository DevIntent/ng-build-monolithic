import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Component151Component } from './component151.component';

describe('Component151Component', () => {
  let component: Component151Component;
  let fixture: ComponentFixture<Component151Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Component151Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Component151Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
