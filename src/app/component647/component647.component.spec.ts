import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Component647Component } from './component647.component';

describe('Component647Component', () => {
  let component: Component647Component;
  let fixture: ComponentFixture<Component647Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Component647Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Component647Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
