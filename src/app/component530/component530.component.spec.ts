import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Component530Component } from './component530.component';

describe('Component530Component', () => {
  let component: Component530Component;
  let fixture: ComponentFixture<Component530Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Component530Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Component530Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
