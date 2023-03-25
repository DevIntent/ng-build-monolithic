import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Component603Component } from './component603.component';

describe('Component603Component', () => {
  let component: Component603Component;
  let fixture: ComponentFixture<Component603Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Component603Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Component603Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
