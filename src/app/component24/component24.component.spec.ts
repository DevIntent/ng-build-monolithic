import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Component24Component } from './component24.component';

describe('Component24Component', () => {
  let component: Component24Component;
  let fixture: ComponentFixture<Component24Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Component24Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Component24Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
