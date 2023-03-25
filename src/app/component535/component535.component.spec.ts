import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Component535Component } from './component535.component';

describe('Component535Component', () => {
  let component: Component535Component;
  let fixture: ComponentFixture<Component535Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Component535Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Component535Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
