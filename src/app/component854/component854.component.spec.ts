import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Component854Component } from './component854.component';

describe('Component854Component', () => {
  let component: Component854Component;
  let fixture: ComponentFixture<Component854Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Component854Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Component854Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
