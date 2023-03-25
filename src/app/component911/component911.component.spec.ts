import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Component911Component } from './component911.component';

describe('Component911Component', () => {
  let component: Component911Component;
  let fixture: ComponentFixture<Component911Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Component911Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Component911Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
