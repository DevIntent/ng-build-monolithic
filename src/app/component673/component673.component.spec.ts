import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Component673Component } from './component673.component';

describe('Component673Component', () => {
  let component: Component673Component;
  let fixture: ComponentFixture<Component673Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Component673Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Component673Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
