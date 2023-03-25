import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Component520Component } from './component520.component';

describe('Component520Component', () => {
  let component: Component520Component;
  let fixture: ComponentFixture<Component520Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Component520Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Component520Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
