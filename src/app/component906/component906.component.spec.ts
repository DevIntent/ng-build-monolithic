import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Component906Component } from './component906.component';

describe('Component906Component', () => {
  let component: Component906Component;
  let fixture: ComponentFixture<Component906Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Component906Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Component906Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
