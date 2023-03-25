import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Component289Component } from './component289.component';

describe('Component289Component', () => {
  let component: Component289Component;
  let fixture: ComponentFixture<Component289Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Component289Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Component289Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
