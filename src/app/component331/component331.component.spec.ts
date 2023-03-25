import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Component331Component } from './component331.component';

describe('Component331Component', () => {
  let component: Component331Component;
  let fixture: ComponentFixture<Component331Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Component331Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Component331Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
