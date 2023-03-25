import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Component443Component } from './component443.component';

describe('Component443Component', () => {
  let component: Component443Component;
  let fixture: ComponentFixture<Component443Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Component443Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Component443Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
