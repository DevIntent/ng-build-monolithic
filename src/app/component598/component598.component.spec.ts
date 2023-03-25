import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Component598Component } from './component598.component';

describe('Component598Component', () => {
  let component: Component598Component;
  let fixture: ComponentFixture<Component598Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Component598Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Component598Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
