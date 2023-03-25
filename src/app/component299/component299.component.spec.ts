import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Component299Component } from './component299.component';

describe('Component299Component', () => {
  let component: Component299Component;
  let fixture: ComponentFixture<Component299Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Component299Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Component299Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
