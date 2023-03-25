import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Component416Component } from './component416.component';

describe('Component416Component', () => {
  let component: Component416Component;
  let fixture: ComponentFixture<Component416Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Component416Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Component416Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
