import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Component382Component } from './component382.component';

describe('Component382Component', () => {
  let component: Component382Component;
  let fixture: ComponentFixture<Component382Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Component382Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Component382Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
