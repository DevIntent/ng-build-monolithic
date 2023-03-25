import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Component720Component } from './component720.component';

describe('Component720Component', () => {
  let component: Component720Component;
  let fixture: ComponentFixture<Component720Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Component720Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Component720Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
