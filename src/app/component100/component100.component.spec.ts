import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Component100Component } from './component100.component';

describe('Component100Component', () => {
  let component: Component100Component;
  let fixture: ComponentFixture<Component100Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Component100Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Component100Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
