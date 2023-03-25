import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Component472Component } from './component472.component';

describe('Component472Component', () => {
  let component: Component472Component;
  let fixture: ComponentFixture<Component472Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Component472Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Component472Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
