import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Component139Component } from './component139.component';

describe('Component139Component', () => {
  let component: Component139Component;
  let fixture: ComponentFixture<Component139Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Component139Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Component139Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
