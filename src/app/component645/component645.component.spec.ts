import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Component645Component } from './component645.component';

describe('Component645Component', () => {
  let component: Component645Component;
  let fixture: ComponentFixture<Component645Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Component645Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Component645Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
