import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Component558Component } from './component558.component';

describe('Component558Component', () => {
  let component: Component558Component;
  let fixture: ComponentFixture<Component558Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Component558Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Component558Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
