import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Component933Component } from './component933.component';

describe('Component933Component', () => {
  let component: Component933Component;
  let fixture: ComponentFixture<Component933Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Component933Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Component933Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
