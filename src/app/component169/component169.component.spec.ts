import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Component169Component } from './component169.component';

describe('Component169Component', () => {
  let component: Component169Component;
  let fixture: ComponentFixture<Component169Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Component169Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Component169Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
