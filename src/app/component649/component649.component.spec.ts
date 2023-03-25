import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Component649Component } from './component649.component';

describe('Component649Component', () => {
  let component: Component649Component;
  let fixture: ComponentFixture<Component649Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Component649Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Component649Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
