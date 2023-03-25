import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Component926Component } from './component926.component';

describe('Component926Component', () => {
  let component: Component926Component;
  let fixture: ComponentFixture<Component926Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Component926Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Component926Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
