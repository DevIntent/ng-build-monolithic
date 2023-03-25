import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Component464Component } from './component464.component';

describe('Component464Component', () => {
  let component: Component464Component;
  let fixture: ComponentFixture<Component464Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Component464Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Component464Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
