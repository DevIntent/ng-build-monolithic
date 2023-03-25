import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Component442Component } from './component442.component';

describe('Component442Component', () => {
  let component: Component442Component;
  let fixture: ComponentFixture<Component442Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Component442Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Component442Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
