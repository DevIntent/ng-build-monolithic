import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Component925Component } from './component925.component';

describe('Component925Component', () => {
  let component: Component925Component;
  let fixture: ComponentFixture<Component925Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Component925Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Component925Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
