import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Component858Component } from './component858.component';

describe('Component858Component', () => {
  let component: Component858Component;
  let fixture: ComponentFixture<Component858Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Component858Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Component858Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
