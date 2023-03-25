import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Component85Component } from './component85.component';

describe('Component85Component', () => {
  let component: Component85Component;
  let fixture: ComponentFixture<Component85Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Component85Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Component85Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
