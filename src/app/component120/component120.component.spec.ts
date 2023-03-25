import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Component120Component } from './component120.component';

describe('Component120Component', () => {
  let component: Component120Component;
  let fixture: ComponentFixture<Component120Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Component120Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Component120Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
