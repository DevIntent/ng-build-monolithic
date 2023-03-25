import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Component747Component } from './component747.component';

describe('Component747Component', () => {
  let component: Component747Component;
  let fixture: ComponentFixture<Component747Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Component747Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Component747Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
