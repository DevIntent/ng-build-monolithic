import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Component994Component } from './component994.component';

describe('Component994Component', () => {
  let component: Component994Component;
  let fixture: ComponentFixture<Component994Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Component994Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Component994Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
