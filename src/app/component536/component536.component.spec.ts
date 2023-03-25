import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Component536Component } from './component536.component';

describe('Component536Component', () => {
  let component: Component536Component;
  let fixture: ComponentFixture<Component536Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Component536Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Component536Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
