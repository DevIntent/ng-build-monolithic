import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Component347Component } from './component347.component';

describe('Component347Component', () => {
  let component: Component347Component;
  let fixture: ComponentFixture<Component347Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Component347Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Component347Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
