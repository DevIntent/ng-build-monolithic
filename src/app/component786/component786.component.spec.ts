import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Component786Component } from './component786.component';

describe('Component786Component', () => {
  let component: Component786Component;
  let fixture: ComponentFixture<Component786Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Component786Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Component786Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
