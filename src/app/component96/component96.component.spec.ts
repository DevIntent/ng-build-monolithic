import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Component96Component } from './component96.component';

describe('Component96Component', () => {
  let component: Component96Component;
  let fixture: ComponentFixture<Component96Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Component96Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Component96Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
