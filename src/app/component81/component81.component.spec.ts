import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Component81Component } from './component81.component';

describe('Component81Component', () => {
  let component: Component81Component;
  let fixture: ComponentFixture<Component81Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Component81Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Component81Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
