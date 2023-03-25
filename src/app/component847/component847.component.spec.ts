import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Component847Component } from './component847.component';

describe('Component847Component', () => {
  let component: Component847Component;
  let fixture: ComponentFixture<Component847Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Component847Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Component847Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
