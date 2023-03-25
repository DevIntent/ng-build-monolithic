import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Component60Component } from './component60.component';

describe('Component60Component', () => {
  let component: Component60Component;
  let fixture: ComponentFixture<Component60Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Component60Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Component60Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
