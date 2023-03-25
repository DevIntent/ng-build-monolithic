import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Component277Component } from './component277.component';

describe('Component277Component', () => {
  let component: Component277Component;
  let fixture: ComponentFixture<Component277Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Component277Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Component277Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
