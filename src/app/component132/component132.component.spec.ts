import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Component132Component } from './component132.component';

describe('Component132Component', () => {
  let component: Component132Component;
  let fixture: ComponentFixture<Component132Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Component132Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Component132Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
