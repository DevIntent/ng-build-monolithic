import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Component438Component } from './component438.component';

describe('Component438Component', () => {
  let component: Component438Component;
  let fixture: ComponentFixture<Component438Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Component438Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Component438Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
