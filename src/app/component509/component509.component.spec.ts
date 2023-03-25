import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Component509Component } from './component509.component';

describe('Component509Component', () => {
  let component: Component509Component;
  let fixture: ComponentFixture<Component509Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Component509Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Component509Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
