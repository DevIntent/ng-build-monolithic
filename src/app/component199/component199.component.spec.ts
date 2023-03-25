import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Component199Component } from './component199.component';

describe('Component199Component', () => {
  let component: Component199Component;
  let fixture: ComponentFixture<Component199Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Component199Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Component199Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
