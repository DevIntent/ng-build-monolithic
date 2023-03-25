import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Component380Component } from './component380.component';

describe('Component380Component', () => {
  let component: Component380Component;
  let fixture: ComponentFixture<Component380Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Component380Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Component380Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
