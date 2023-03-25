import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Component717Component } from './component717.component';

describe('Component717Component', () => {
  let component: Component717Component;
  let fixture: ComponentFixture<Component717Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Component717Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Component717Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
