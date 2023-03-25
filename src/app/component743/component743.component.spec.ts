import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Component743Component } from './component743.component';

describe('Component743Component', () => {
  let component: Component743Component;
  let fixture: ComponentFixture<Component743Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Component743Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Component743Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
