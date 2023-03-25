import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Component563Component } from './component563.component';

describe('Component563Component', () => {
  let component: Component563Component;
  let fixture: ComponentFixture<Component563Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Component563Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Component563Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
