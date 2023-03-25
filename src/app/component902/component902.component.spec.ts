import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Component902Component } from './component902.component';

describe('Component902Component', () => {
  let component: Component902Component;
  let fixture: ComponentFixture<Component902Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Component902Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Component902Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
