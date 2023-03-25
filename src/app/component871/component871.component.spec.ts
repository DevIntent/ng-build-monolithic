import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Component871Component } from './component871.component';

describe('Component871Component', () => {
  let component: Component871Component;
  let fixture: ComponentFixture<Component871Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Component871Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Component871Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
