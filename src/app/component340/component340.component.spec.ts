import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Component340Component } from './component340.component';

describe('Component340Component', () => {
  let component: Component340Component;
  let fixture: ComponentFixture<Component340Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Component340Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Component340Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
