import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Component724Component } from './component724.component';

describe('Component724Component', () => {
  let component: Component724Component;
  let fixture: ComponentFixture<Component724Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Component724Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Component724Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
