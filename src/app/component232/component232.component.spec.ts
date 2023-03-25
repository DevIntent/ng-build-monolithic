import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Component232Component } from './component232.component';

describe('Component232Component', () => {
  let component: Component232Component;
  let fixture: ComponentFixture<Component232Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Component232Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Component232Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
