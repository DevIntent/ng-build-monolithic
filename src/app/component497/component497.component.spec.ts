import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Component497Component } from './component497.component';

describe('Component497Component', () => {
  let component: Component497Component;
  let fixture: ComponentFixture<Component497Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Component497Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Component497Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
