import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Component500Component } from './component500.component';

describe('Component500Component', () => {
  let component: Component500Component;
  let fixture: ComponentFixture<Component500Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Component500Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Component500Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
