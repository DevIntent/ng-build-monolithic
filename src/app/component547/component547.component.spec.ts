import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Component547Component } from './component547.component';

describe('Component547Component', () => {
  let component: Component547Component;
  let fixture: ComponentFixture<Component547Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Component547Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Component547Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
