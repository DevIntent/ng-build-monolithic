import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Component491Component } from './component491.component';

describe('Component491Component', () => {
  let component: Component491Component;
  let fixture: ComponentFixture<Component491Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Component491Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Component491Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
