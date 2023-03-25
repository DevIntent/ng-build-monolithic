import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Component753Component } from './component753.component';

describe('Component753Component', () => {
  let component: Component753Component;
  let fixture: ComponentFixture<Component753Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Component753Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Component753Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
