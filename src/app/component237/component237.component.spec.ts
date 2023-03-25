import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Component237Component } from './component237.component';

describe('Component237Component', () => {
  let component: Component237Component;
  let fixture: ComponentFixture<Component237Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Component237Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Component237Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
