import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Component309Component } from './component309.component';

describe('Component309Component', () => {
  let component: Component309Component;
  let fixture: ComponentFixture<Component309Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Component309Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Component309Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
