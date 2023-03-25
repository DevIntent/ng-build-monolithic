import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Component184Component } from './component184.component';

describe('Component184Component', () => {
  let component: Component184Component;
  let fixture: ComponentFixture<Component184Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Component184Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Component184Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
