import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Component193Component } from './component193.component';

describe('Component193Component', () => {
  let component: Component193Component;
  let fixture: ComponentFixture<Component193Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Component193Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Component193Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
