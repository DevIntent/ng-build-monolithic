import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Component909Component } from './component909.component';

describe('Component909Component', () => {
  let component: Component909Component;
  let fixture: ComponentFixture<Component909Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Component909Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Component909Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
