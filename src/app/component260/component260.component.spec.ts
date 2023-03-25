import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Component260Component } from './component260.component';

describe('Component260Component', () => {
  let component: Component260Component;
  let fixture: ComponentFixture<Component260Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Component260Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Component260Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
