import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Component179Component } from './component179.component';

describe('Component179Component', () => {
  let component: Component179Component;
  let fixture: ComponentFixture<Component179Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Component179Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Component179Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
