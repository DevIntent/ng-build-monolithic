import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Component114Component } from './component114.component';

describe('Component114Component', () => {
  let component: Component114Component;
  let fixture: ComponentFixture<Component114Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Component114Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Component114Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
