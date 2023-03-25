import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Component407Component } from './component407.component';

describe('Component407Component', () => {
  let component: Component407Component;
  let fixture: ComponentFixture<Component407Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Component407Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Component407Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
