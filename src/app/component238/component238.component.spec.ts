import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Component238Component } from './component238.component';

describe('Component238Component', () => {
  let component: Component238Component;
  let fixture: ComponentFixture<Component238Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Component238Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Component238Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
