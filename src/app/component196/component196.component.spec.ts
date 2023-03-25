import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Component196Component } from './component196.component';

describe('Component196Component', () => {
  let component: Component196Component;
  let fixture: ComponentFixture<Component196Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Component196Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Component196Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
