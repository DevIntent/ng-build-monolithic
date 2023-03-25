import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Component958Component } from './component958.component';

describe('Component958Component', () => {
  let component: Component958Component;
  let fixture: ComponentFixture<Component958Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Component958Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Component958Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
