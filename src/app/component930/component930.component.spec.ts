import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Component930Component } from './component930.component';

describe('Component930Component', () => {
  let component: Component930Component;
  let fixture: ComponentFixture<Component930Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Component930Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Component930Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
