import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Component98Component } from './component98.component';

describe('Component98Component', () => {
  let component: Component98Component;
  let fixture: ComponentFixture<Component98Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Component98Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Component98Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
