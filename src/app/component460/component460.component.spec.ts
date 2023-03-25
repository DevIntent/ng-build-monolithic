import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Component460Component } from './component460.component';

describe('Component460Component', () => {
  let component: Component460Component;
  let fixture: ComponentFixture<Component460Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Component460Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Component460Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
