import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Component766Component } from './component766.component';

describe('Component766Component', () => {
  let component: Component766Component;
  let fixture: ComponentFixture<Component766Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Component766Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Component766Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
