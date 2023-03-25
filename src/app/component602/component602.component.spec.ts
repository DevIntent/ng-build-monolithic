import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Component602Component } from './component602.component';

describe('Component602Component', () => {
  let component: Component602Component;
  let fixture: ComponentFixture<Component602Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Component602Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Component602Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
