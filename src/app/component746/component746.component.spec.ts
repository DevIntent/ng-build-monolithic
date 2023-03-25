import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Component746Component } from './component746.component';

describe('Component746Component', () => {
  let component: Component746Component;
  let fixture: ComponentFixture<Component746Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Component746Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Component746Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
