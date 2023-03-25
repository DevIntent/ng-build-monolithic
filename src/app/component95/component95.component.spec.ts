import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Component95Component } from './component95.component';

describe('Component95Component', () => {
  let component: Component95Component;
  let fixture: ComponentFixture<Component95Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Component95Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Component95Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
