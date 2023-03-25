import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Component211Component } from './component211.component';

describe('Component211Component', () => {
  let component: Component211Component;
  let fixture: ComponentFixture<Component211Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Component211Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Component211Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
