import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Component736Component } from './component736.component';

describe('Component736Component', () => {
  let component: Component736Component;
  let fixture: ComponentFixture<Component736Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Component736Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Component736Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
