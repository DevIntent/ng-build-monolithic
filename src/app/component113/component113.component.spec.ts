import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Component113Component } from './component113.component';

describe('Component113Component', () => {
  let component: Component113Component;
  let fixture: ComponentFixture<Component113Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Component113Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Component113Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
