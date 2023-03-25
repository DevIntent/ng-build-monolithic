import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Component810Component } from './component810.component';

describe('Component810Component', () => {
  let component: Component810Component;
  let fixture: ComponentFixture<Component810Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Component810Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Component810Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
