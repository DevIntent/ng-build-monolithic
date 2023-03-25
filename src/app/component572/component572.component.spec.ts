import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Component572Component } from './component572.component';

describe('Component572Component', () => {
  let component: Component572Component;
  let fixture: ComponentFixture<Component572Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Component572Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Component572Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
