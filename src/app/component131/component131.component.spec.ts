import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Component131Component } from './component131.component';

describe('Component131Component', () => {
  let component: Component131Component;
  let fixture: ComponentFixture<Component131Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Component131Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Component131Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
