import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Component298Component } from './component298.component';

describe('Component298Component', () => {
  let component: Component298Component;
  let fixture: ComponentFixture<Component298Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Component298Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Component298Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
