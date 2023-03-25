import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Component171Component } from './component171.component';

describe('Component171Component', () => {
  let component: Component171Component;
  let fixture: ComponentFixture<Component171Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Component171Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Component171Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
