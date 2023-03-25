import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Component938Component } from './component938.component';

describe('Component938Component', () => {
  let component: Component938Component;
  let fixture: ComponentFixture<Component938Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Component938Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Component938Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
