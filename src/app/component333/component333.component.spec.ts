import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Component333Component } from './component333.component';

describe('Component333Component', () => {
  let component: Component333Component;
  let fixture: ComponentFixture<Component333Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Component333Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Component333Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
