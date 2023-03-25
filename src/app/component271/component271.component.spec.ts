import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Component271Component } from './component271.component';

describe('Component271Component', () => {
  let component: Component271Component;
  let fixture: ComponentFixture<Component271Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Component271Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Component271Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
