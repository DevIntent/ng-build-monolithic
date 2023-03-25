import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Component266Component } from './component266.component';

describe('Component266Component', () => {
  let component: Component266Component;
  let fixture: ComponentFixture<Component266Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Component266Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Component266Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
