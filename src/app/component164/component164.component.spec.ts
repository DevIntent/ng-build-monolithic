import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Component164Component } from './component164.component';

describe('Component164Component', () => {
  let component: Component164Component;
  let fixture: ComponentFixture<Component164Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Component164Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Component164Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
