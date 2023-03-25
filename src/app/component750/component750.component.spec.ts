import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Component750Component } from './component750.component';

describe('Component750Component', () => {
  let component: Component750Component;
  let fixture: ComponentFixture<Component750Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Component750Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Component750Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
