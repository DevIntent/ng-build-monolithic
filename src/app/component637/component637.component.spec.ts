import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Component637Component } from './component637.component';

describe('Component637Component', () => {
  let component: Component637Component;
  let fixture: ComponentFixture<Component637Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Component637Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Component637Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
