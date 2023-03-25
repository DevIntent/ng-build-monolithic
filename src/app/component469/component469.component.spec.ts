import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Component469Component } from './component469.component';

describe('Component469Component', () => {
  let component: Component469Component;
  let fixture: ComponentFixture<Component469Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Component469Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Component469Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
