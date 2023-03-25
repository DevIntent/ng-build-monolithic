import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Component686Component } from './component686.component';

describe('Component686Component', () => {
  let component: Component686Component;
  let fixture: ComponentFixture<Component686Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Component686Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Component686Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
