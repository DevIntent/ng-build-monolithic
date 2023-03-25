import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Component527Component } from './component527.component';

describe('Component527Component', () => {
  let component: Component527Component;
  let fixture: ComponentFixture<Component527Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Component527Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Component527Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
