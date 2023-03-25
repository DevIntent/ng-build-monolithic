import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Component338Component } from './component338.component';

describe('Component338Component', () => {
  let component: Component338Component;
  let fixture: ComponentFixture<Component338Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Component338Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Component338Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
