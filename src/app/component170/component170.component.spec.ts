import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Component170Component } from './component170.component';

describe('Component170Component', () => {
  let component: Component170Component;
  let fixture: ComponentFixture<Component170Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Component170Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Component170Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
