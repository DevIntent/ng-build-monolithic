import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Component999Component } from './component999.component';

describe('Component999Component', () => {
  let component: Component999Component;
  let fixture: ComponentFixture<Component999Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Component999Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Component999Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
