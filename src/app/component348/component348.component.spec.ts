import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Component348Component } from './component348.component';

describe('Component348Component', () => {
  let component: Component348Component;
  let fixture: ComponentFixture<Component348Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Component348Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Component348Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
