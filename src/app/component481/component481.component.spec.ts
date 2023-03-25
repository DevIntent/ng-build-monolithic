import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Component481Component } from './component481.component';

describe('Component481Component', () => {
  let component: Component481Component;
  let fixture: ComponentFixture<Component481Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Component481Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Component481Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
