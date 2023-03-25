import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Component94Component } from './component94.component';

describe('Component94Component', () => {
  let component: Component94Component;
  let fixture: ComponentFixture<Component94Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Component94Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Component94Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
