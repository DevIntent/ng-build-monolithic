import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Component588Component } from './component588.component';

describe('Component588Component', () => {
  let component: Component588Component;
  let fixture: ComponentFixture<Component588Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Component588Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Component588Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
