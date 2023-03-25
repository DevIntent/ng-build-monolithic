import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Component195Component } from './component195.component';

describe('Component195Component', () => {
  let component: Component195Component;
  let fixture: ComponentFixture<Component195Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Component195Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Component195Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
