import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Component942Component } from './component942.component';

describe('Component942Component', () => {
  let component: Component942Component;
  let fixture: ComponentFixture<Component942Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Component942Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Component942Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
