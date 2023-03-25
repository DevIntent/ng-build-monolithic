import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Component780Component } from './component780.component';

describe('Component780Component', () => {
  let component: Component780Component;
  let fixture: ComponentFixture<Component780Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Component780Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Component780Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
