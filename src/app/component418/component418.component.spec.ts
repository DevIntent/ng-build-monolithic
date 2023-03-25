import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Component418Component } from './component418.component';

describe('Component418Component', () => {
  let component: Component418Component;
  let fixture: ComponentFixture<Component418Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Component418Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Component418Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
