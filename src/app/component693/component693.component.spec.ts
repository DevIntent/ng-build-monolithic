import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Component693Component } from './component693.component';

describe('Component693Component', () => {
  let component: Component693Component;
  let fixture: ComponentFixture<Component693Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Component693Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Component693Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
