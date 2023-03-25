import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Component78Component } from './component78.component';

describe('Component78Component', () => {
  let component: Component78Component;
  let fixture: ComponentFixture<Component78Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Component78Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Component78Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
