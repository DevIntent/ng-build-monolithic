import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Component463Component } from './component463.component';

describe('Component463Component', () => {
  let component: Component463Component;
  let fixture: ComponentFixture<Component463Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Component463Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Component463Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
