import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Component485Component } from './component485.component';

describe('Component485Component', () => {
  let component: Component485Component;
  let fixture: ComponentFixture<Component485Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Component485Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Component485Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
