import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Component914Component } from './component914.component';

describe('Component914Component', () => {
  let component: Component914Component;
  let fixture: ComponentFixture<Component914Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Component914Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Component914Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
