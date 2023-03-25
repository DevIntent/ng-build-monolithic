import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Component254Component } from './component254.component';

describe('Component254Component', () => {
  let component: Component254Component;
  let fixture: ComponentFixture<Component254Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Component254Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Component254Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
