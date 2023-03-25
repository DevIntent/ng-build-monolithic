import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Component273Component } from './component273.component';

describe('Component273Component', () => {
  let component: Component273Component;
  let fixture: ComponentFixture<Component273Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Component273Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Component273Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
