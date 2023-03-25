import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Component800Component } from './component800.component';

describe('Component800Component', () => {
  let component: Component800Component;
  let fixture: ComponentFixture<Component800Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Component800Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Component800Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
