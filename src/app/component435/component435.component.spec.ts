import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Component435Component } from './component435.component';

describe('Component435Component', () => {
  let component: Component435Component;
  let fixture: ComponentFixture<Component435Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Component435Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Component435Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
