import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Component452Component } from './component452.component';

describe('Component452Component', () => {
  let component: Component452Component;
  let fixture: ComponentFixture<Component452Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Component452Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Component452Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
