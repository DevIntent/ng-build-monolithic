import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Component946Component } from './component946.component';

describe('Component946Component', () => {
  let component: Component946Component;
  let fixture: ComponentFixture<Component946Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Component946Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Component946Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
