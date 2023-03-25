import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Component462Component } from './component462.component';

describe('Component462Component', () => {
  let component: Component462Component;
  let fixture: ComponentFixture<Component462Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Component462Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Component462Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
