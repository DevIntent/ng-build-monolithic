import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Component191Component } from './component191.component';

describe('Component191Component', () => {
  let component: Component191Component;
  let fixture: ComponentFixture<Component191Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Component191Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Component191Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
