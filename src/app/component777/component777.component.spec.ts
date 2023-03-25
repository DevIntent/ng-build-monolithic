import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Component777Component } from './component777.component';

describe('Component777Component', () => {
  let component: Component777Component;
  let fixture: ComponentFixture<Component777Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Component777Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Component777Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
