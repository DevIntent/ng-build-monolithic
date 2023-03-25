import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Component595Component } from './component595.component';

describe('Component595Component', () => {
  let component: Component595Component;
  let fixture: ComponentFixture<Component595Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Component595Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Component595Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
