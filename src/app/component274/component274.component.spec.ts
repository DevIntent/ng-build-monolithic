import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Component274Component } from './component274.component';

describe('Component274Component', () => {
  let component: Component274Component;
  let fixture: ComponentFixture<Component274Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Component274Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Component274Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
