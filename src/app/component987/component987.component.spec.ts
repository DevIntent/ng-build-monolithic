import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Component987Component } from './component987.component';

describe('Component987Component', () => {
  let component: Component987Component;
  let fixture: ComponentFixture<Component987Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Component987Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Component987Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
