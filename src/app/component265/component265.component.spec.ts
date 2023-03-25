import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Component265Component } from './component265.component';

describe('Component265Component', () => {
  let component: Component265Component;
  let fixture: ComponentFixture<Component265Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Component265Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Component265Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
