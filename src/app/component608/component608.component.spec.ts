import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Component608Component } from './component608.component';

describe('Component608Component', () => {
  let component: Component608Component;
  let fixture: ComponentFixture<Component608Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Component608Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Component608Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
