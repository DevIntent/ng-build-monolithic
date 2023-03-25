import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Component126Component } from './component126.component';

describe('Component126Component', () => {
  let component: Component126Component;
  let fixture: ComponentFixture<Component126Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Component126Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Component126Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
