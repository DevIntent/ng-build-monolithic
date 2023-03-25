import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Component670Component } from './component670.component';

describe('Component670Component', () => {
  let component: Component670Component;
  let fixture: ComponentFixture<Component670Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Component670Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Component670Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
