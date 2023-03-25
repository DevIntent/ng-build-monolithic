import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Component846Component } from './component846.component';

describe('Component846Component', () => {
  let component: Component846Component;
  let fixture: ComponentFixture<Component846Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Component846Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Component846Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
