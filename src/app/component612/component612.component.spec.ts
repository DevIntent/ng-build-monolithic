import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Component612Component } from './component612.component';

describe('Component612Component', () => {
  let component: Component612Component;
  let fixture: ComponentFixture<Component612Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Component612Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Component612Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
