import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Component124Component } from './component124.component';

describe('Component124Component', () => {
  let component: Component124Component;
  let fixture: ComponentFixture<Component124Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Component124Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Component124Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
