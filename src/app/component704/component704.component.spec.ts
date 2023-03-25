import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Component704Component } from './component704.component';

describe('Component704Component', () => {
  let component: Component704Component;
  let fixture: ComponentFixture<Component704Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Component704Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Component704Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
