import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Component36Component } from './component36.component';

describe('Component36Component', () => {
  let component: Component36Component;
  let fixture: ComponentFixture<Component36Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Component36Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Component36Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
