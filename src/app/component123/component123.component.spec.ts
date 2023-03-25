import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Component123Component } from './component123.component';

describe('Component123Component', () => {
  let component: Component123Component;
  let fixture: ComponentFixture<Component123Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Component123Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Component123Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
