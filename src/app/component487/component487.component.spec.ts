import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Component487Component } from './component487.component';

describe('Component487Component', () => {
  let component: Component487Component;
  let fixture: ComponentFixture<Component487Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Component487Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Component487Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
