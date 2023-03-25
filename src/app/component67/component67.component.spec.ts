import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Component67Component } from './component67.component';

describe('Component67Component', () => {
  let component: Component67Component;
  let fixture: ComponentFixture<Component67Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Component67Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Component67Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
