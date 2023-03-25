import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Component966Component } from './component966.component';

describe('Component966Component', () => {
  let component: Component966Component;
  let fixture: ComponentFixture<Component966Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Component966Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Component966Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
