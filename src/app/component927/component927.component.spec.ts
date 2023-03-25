import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Component927Component } from './component927.component';

describe('Component927Component', () => {
  let component: Component927Component;
  let fixture: ComponentFixture<Component927Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Component927Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Component927Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
