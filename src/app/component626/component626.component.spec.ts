import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Component626Component } from './component626.component';

describe('Component626Component', () => {
  let component: Component626Component;
  let fixture: ComponentFixture<Component626Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Component626Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Component626Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
