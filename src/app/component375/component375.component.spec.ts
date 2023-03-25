import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Component375Component } from './component375.component';

describe('Component375Component', () => {
  let component: Component375Component;
  let fixture: ComponentFixture<Component375Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Component375Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Component375Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
