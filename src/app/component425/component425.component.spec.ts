import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Component425Component } from './component425.component';

describe('Component425Component', () => {
  let component: Component425Component;
  let fixture: ComponentFixture<Component425Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Component425Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Component425Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
