import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Component955Component } from './component955.component';

describe('Component955Component', () => {
  let component: Component955Component;
  let fixture: ComponentFixture<Component955Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Component955Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Component955Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
