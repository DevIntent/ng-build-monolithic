import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Component776Component } from './component776.component';

describe('Component776Component', () => {
  let component: Component776Component;
  let fixture: ComponentFixture<Component776Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Component776Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Component776Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
