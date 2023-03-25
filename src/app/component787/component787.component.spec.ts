import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Component787Component } from './component787.component';

describe('Component787Component', () => {
  let component: Component787Component;
  let fixture: ComponentFixture<Component787Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Component787Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Component787Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
