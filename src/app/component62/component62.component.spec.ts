import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Component62Component } from './component62.component';

describe('Component62Component', () => {
  let component: Component62Component;
  let fixture: ComponentFixture<Component62Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Component62Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Component62Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
