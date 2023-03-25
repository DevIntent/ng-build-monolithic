import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Component221Component } from './component221.component';

describe('Component221Component', () => {
  let component: Component221Component;
  let fixture: ComponentFixture<Component221Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Component221Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Component221Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
