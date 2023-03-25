import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Component204Component } from './component204.component';

describe('Component204Component', () => {
  let component: Component204Component;
  let fixture: ComponentFixture<Component204Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Component204Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Component204Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
