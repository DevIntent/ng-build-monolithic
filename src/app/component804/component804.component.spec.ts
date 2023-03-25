import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Component804Component } from './component804.component';

describe('Component804Component', () => {
  let component: Component804Component;
  let fixture: ComponentFixture<Component804Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Component804Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Component804Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
