import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Component367Component } from './component367.component';

describe('Component367Component', () => {
  let component: Component367Component;
  let fixture: ComponentFixture<Component367Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Component367Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Component367Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
