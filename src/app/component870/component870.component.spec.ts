import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Component870Component } from './component870.component';

describe('Component870Component', () => {
  let component: Component870Component;
  let fixture: ComponentFixture<Component870Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Component870Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Component870Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
