import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Component894Component } from './component894.component';

describe('Component894Component', () => {
  let component: Component894Component;
  let fixture: ComponentFixture<Component894Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Component894Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Component894Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
