import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Component859Component } from './component859.component';

describe('Component859Component', () => {
  let component: Component859Component;
  let fixture: ComponentFixture<Component859Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Component859Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Component859Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
