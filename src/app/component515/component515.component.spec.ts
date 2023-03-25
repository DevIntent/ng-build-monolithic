import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Component515Component } from './component515.component';

describe('Component515Component', () => {
  let component: Component515Component;
  let fixture: ComponentFixture<Component515Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Component515Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Component515Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
