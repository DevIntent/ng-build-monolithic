import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Component702Component } from './component702.component';

describe('Component702Component', () => {
  let component: Component702Component;
  let fixture: ComponentFixture<Component702Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Component702Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Component702Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
