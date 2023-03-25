import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Component320Component } from './component320.component';

describe('Component320Component', () => {
  let component: Component320Component;
  let fixture: ComponentFixture<Component320Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Component320Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Component320Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
