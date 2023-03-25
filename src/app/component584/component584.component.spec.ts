import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Component584Component } from './component584.component';

describe('Component584Component', () => {
  let component: Component584Component;
  let fixture: ComponentFixture<Component584Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Component584Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Component584Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
