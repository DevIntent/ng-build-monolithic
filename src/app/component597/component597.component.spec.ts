import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Component597Component } from './component597.component';

describe('Component597Component', () => {
  let component: Component597Component;
  let fixture: ComponentFixture<Component597Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Component597Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Component597Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
