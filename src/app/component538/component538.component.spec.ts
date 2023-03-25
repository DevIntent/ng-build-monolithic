import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Component538Component } from './component538.component';

describe('Component538Component', () => {
  let component: Component538Component;
  let fixture: ComponentFixture<Component538Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Component538Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Component538Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
