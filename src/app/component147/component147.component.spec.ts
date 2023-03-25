import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Component147Component } from './component147.component';

describe('Component147Component', () => {
  let component: Component147Component;
  let fixture: ComponentFixture<Component147Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Component147Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Component147Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
