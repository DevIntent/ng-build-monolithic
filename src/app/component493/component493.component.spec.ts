import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Component493Component } from './component493.component';

describe('Component493Component', () => {
  let component: Component493Component;
  let fixture: ComponentFixture<Component493Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Component493Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Component493Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
