import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Component781Component } from './component781.component';

describe('Component781Component', () => {
  let component: Component781Component;
  let fixture: ComponentFixture<Component781Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Component781Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Component781Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
