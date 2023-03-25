import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Component556Component } from './component556.component';

describe('Component556Component', () => {
  let component: Component556Component;
  let fixture: ComponentFixture<Component556Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Component556Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Component556Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
