import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Component157Component } from './component157.component';

describe('Component157Component', () => {
  let component: Component157Component;
  let fixture: ComponentFixture<Component157Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Component157Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Component157Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
