import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Component838Component } from './component838.component';

describe('Component838Component', () => {
  let component: Component838Component;
  let fixture: ComponentFixture<Component838Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Component838Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Component838Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
