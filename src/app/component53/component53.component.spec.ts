import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Component53Component } from './component53.component';

describe('Component53Component', () => {
  let component: Component53Component;
  let fixture: ComponentFixture<Component53Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Component53Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Component53Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
