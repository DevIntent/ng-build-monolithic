import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Component985Component } from './component985.component';

describe('Component985Component', () => {
  let component: Component985Component;
  let fixture: ComponentFixture<Component985Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Component985Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Component985Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
