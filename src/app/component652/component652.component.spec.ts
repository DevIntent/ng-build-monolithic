import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Component652Component } from './component652.component';

describe('Component652Component', () => {
  let component: Component652Component;
  let fixture: ComponentFixture<Component652Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Component652Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Component652Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
