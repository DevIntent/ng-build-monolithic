import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Component795Component } from './component795.component';

describe('Component795Component', () => {
  let component: Component795Component;
  let fixture: ComponentFixture<Component795Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Component795Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Component795Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
