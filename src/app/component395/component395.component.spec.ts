import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Component395Component } from './component395.component';

describe('Component395Component', () => {
  let component: Component395Component;
  let fixture: ComponentFixture<Component395Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Component395Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Component395Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
