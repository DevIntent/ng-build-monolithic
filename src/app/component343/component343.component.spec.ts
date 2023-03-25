import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Component343Component } from './component343.component';

describe('Component343Component', () => {
  let component: Component343Component;
  let fixture: ComponentFixture<Component343Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Component343Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Component343Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
