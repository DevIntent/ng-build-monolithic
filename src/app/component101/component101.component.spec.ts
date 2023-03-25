import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Component101Component } from './component101.component';

describe('Component101Component', () => {
  let component: Component101Component;
  let fixture: ComponentFixture<Component101Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Component101Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Component101Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
