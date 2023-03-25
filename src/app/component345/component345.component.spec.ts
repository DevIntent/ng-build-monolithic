import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Component345Component } from './component345.component';

describe('Component345Component', () => {
  let component: Component345Component;
  let fixture: ComponentFixture<Component345Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Component345Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Component345Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
