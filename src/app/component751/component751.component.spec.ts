import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Component751Component } from './component751.component';

describe('Component751Component', () => {
  let component: Component751Component;
  let fixture: ComponentFixture<Component751Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Component751Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Component751Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
