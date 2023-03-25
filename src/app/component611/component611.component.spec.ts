import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Component611Component } from './component611.component';

describe('Component611Component', () => {
  let component: Component611Component;
  let fixture: ComponentFixture<Component611Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Component611Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Component611Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
