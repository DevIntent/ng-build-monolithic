import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Component631Component } from './component631.component';

describe('Component631Component', () => {
  let component: Component631Component;
  let fixture: ComponentFixture<Component631Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Component631Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Component631Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
