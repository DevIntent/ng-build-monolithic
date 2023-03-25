import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Component40Component } from './component40.component';

describe('Component40Component', () => {
  let component: Component40Component;
  let fixture: ComponentFixture<Component40Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Component40Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Component40Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
