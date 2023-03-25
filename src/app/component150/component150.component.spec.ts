import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Component150Component } from './component150.component';

describe('Component150Component', () => {
  let component: Component150Component;
  let fixture: ComponentFixture<Component150Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Component150Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Component150Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
