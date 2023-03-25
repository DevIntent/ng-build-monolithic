import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Component291Component } from './component291.component';

describe('Component291Component', () => {
  let component: Component291Component;
  let fixture: ComponentFixture<Component291Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Component291Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Component291Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
