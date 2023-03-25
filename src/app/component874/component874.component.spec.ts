import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Component874Component } from './component874.component';

describe('Component874Component', () => {
  let component: Component874Component;
  let fixture: ComponentFixture<Component874Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Component874Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Component874Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
