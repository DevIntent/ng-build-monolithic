import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Component822Component } from './component822.component';

describe('Component822Component', () => {
  let component: Component822Component;
  let fixture: ComponentFixture<Component822Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Component822Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Component822Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
