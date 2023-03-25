import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Component405Component } from './component405.component';

describe('Component405Component', () => {
  let component: Component405Component;
  let fixture: ComponentFixture<Component405Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Component405Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Component405Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
