import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Component103Component } from './component103.component';

describe('Component103Component', () => {
  let component: Component103Component;
  let fixture: ComponentFixture<Component103Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Component103Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Component103Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
