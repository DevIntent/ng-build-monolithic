import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Component924Component } from './component924.component';

describe('Component924Component', () => {
  let component: Component924Component;
  let fixture: ComponentFixture<Component924Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Component924Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Component924Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
