import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Component473Component } from './component473.component';

describe('Component473Component', () => {
  let component: Component473Component;
  let fixture: ComponentFixture<Component473Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Component473Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Component473Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
