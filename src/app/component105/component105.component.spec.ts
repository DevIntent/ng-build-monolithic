import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Component105Component } from './component105.component';

describe('Component105Component', () => {
  let component: Component105Component;
  let fixture: ComponentFixture<Component105Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Component105Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Component105Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
