import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Component767Component } from './component767.component';

describe('Component767Component', () => {
  let component: Component767Component;
  let fixture: ComponentFixture<Component767Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Component767Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Component767Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
