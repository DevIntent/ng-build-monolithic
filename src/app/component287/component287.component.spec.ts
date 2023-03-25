import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Component287Component } from './component287.component';

describe('Component287Component', () => {
  let component: Component287Component;
  let fixture: ComponentFixture<Component287Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Component287Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Component287Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
