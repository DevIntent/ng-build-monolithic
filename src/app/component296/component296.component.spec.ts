import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Component296Component } from './component296.component';

describe('Component296Component', () => {
  let component: Component296Component;
  let fixture: ComponentFixture<Component296Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Component296Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Component296Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
