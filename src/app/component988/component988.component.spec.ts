import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Component988Component } from './component988.component';

describe('Component988Component', () => {
  let component: Component988Component;
  let fixture: ComponentFixture<Component988Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Component988Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Component988Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
