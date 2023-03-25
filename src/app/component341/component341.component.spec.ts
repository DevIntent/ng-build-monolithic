import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Component341Component } from './component341.component';

describe('Component341Component', () => {
  let component: Component341Component;
  let fixture: ComponentFixture<Component341Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Component341Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Component341Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
