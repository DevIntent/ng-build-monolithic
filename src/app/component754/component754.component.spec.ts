import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Component754Component } from './component754.component';

describe('Component754Component', () => {
  let component: Component754Component;
  let fixture: ComponentFixture<Component754Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Component754Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Component754Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
