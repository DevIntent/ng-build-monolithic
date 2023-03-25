import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Component208Component } from './component208.component';

describe('Component208Component', () => {
  let component: Component208Component;
  let fixture: ComponentFixture<Component208Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Component208Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Component208Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
