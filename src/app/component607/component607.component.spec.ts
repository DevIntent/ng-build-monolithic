import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Component607Component } from './component607.component';

describe('Component607Component', () => {
  let component: Component607Component;
  let fixture: ComponentFixture<Component607Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Component607Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Component607Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
