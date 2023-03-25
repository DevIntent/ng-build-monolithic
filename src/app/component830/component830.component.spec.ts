import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Component830Component } from './component830.component';

describe('Component830Component', () => {
  let component: Component830Component;
  let fixture: ComponentFixture<Component830Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Component830Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Component830Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
