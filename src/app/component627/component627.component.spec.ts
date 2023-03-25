import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Component627Component } from './component627.component';

describe('Component627Component', () => {
  let component: Component627Component;
  let fixture: ComponentFixture<Component627Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Component627Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Component627Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
