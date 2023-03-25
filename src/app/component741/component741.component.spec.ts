import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Component741Component } from './component741.component';

describe('Component741Component', () => {
  let component: Component741Component;
  let fixture: ComponentFixture<Component741Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Component741Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Component741Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
