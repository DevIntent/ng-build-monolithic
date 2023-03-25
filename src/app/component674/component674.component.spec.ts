import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Component674Component } from './component674.component';

describe('Component674Component', () => {
  let component: Component674Component;
  let fixture: ComponentFixture<Component674Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Component674Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Component674Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
