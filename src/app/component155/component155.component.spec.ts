import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Component155Component } from './component155.component';

describe('Component155Component', () => {
  let component: Component155Component;
  let fixture: ComponentFixture<Component155Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Component155Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Component155Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
