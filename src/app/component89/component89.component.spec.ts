import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Component89Component } from './component89.component';

describe('Component89Component', () => {
  let component: Component89Component;
  let fixture: ComponentFixture<Component89Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Component89Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Component89Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
