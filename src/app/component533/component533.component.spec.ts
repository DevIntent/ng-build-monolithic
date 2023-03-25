import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Component533Component } from './component533.component';

describe('Component533Component', () => {
  let component: Component533Component;
  let fixture: ComponentFixture<Component533Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Component533Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Component533Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
