import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Component447Component } from './component447.component';

describe('Component447Component', () => {
  let component: Component447Component;
  let fixture: ComponentFixture<Component447Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Component447Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Component447Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
