import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Component255Component } from './component255.component';

describe('Component255Component', () => {
  let component: Component255Component;
  let fixture: ComponentFixture<Component255Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Component255Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Component255Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
