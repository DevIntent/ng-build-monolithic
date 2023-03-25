import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Component410Component } from './component410.component';

describe('Component410Component', () => {
  let component: Component410Component;
  let fixture: ComponentFixture<Component410Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Component410Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Component410Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
