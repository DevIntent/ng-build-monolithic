import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Component852Component } from './component852.component';

describe('Component852Component', () => {
  let component: Component852Component;
  let fixture: ComponentFixture<Component852Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Component852Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Component852Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
