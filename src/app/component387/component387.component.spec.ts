import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Component387Component } from './component387.component';

describe('Component387Component', () => {
  let component: Component387Component;
  let fixture: ComponentFixture<Component387Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Component387Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Component387Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
