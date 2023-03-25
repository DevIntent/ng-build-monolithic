import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Component963Component } from './component963.component';

describe('Component963Component', () => {
  let component: Component963Component;
  let fixture: ComponentFixture<Component963Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Component963Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Component963Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
