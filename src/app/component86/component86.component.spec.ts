import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Component86Component } from './component86.component';

describe('Component86Component', () => {
  let component: Component86Component;
  let fixture: ComponentFixture<Component86Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Component86Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Component86Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
