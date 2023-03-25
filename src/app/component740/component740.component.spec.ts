import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Component740Component } from './component740.component';

describe('Component740Component', () => {
  let component: Component740Component;
  let fixture: ComponentFixture<Component740Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Component740Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Component740Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
