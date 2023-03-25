import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Component252Component } from './component252.component';

describe('Component252Component', () => {
  let component: Component252Component;
  let fixture: ComponentFixture<Component252Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Component252Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Component252Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
