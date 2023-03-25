import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Component917Component } from './component917.component';

describe('Component917Component', () => {
  let component: Component917Component;
  let fixture: ComponentFixture<Component917Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Component917Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Component917Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
