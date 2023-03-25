import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Component975Component } from './component975.component';

describe('Component975Component', () => {
  let component: Component975Component;
  let fixture: ComponentFixture<Component975Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Component975Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Component975Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
