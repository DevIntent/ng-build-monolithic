import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Component886Component } from './component886.component';

describe('Component886Component', () => {
  let component: Component886Component;
  let fixture: ComponentFixture<Component886Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Component886Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Component886Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
