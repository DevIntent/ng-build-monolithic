import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Component688Component } from './component688.component';

describe('Component688Component', () => {
  let component: Component688Component;
  let fixture: ComponentFixture<Component688Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Component688Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Component688Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
