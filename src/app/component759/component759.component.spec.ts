import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Component759Component } from './component759.component';

describe('Component759Component', () => {
  let component: Component759Component;
  let fixture: ComponentFixture<Component759Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Component759Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Component759Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
