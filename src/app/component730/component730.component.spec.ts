import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Component730Component } from './component730.component';

describe('Component730Component', () => {
  let component: Component730Component;
  let fixture: ComponentFixture<Component730Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Component730Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Component730Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
