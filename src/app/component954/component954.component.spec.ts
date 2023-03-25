import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Component954Component } from './component954.component';

describe('Component954Component', () => {
  let component: Component954Component;
  let fixture: ComponentFixture<Component954Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Component954Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Component954Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
