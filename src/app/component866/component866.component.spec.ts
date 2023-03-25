import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Component866Component } from './component866.component';

describe('Component866Component', () => {
  let component: Component866Component;
  let fixture: ComponentFixture<Component866Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Component866Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Component866Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
