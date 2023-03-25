import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Component117Component } from './component117.component';

describe('Component117Component', () => {
  let component: Component117Component;
  let fixture: ComponentFixture<Component117Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Component117Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Component117Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
