import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Component944Component } from './component944.component';

describe('Component944Component', () => {
  let component: Component944Component;
  let fixture: ComponentFixture<Component944Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Component944Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Component944Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
