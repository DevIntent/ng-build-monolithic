import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Component867Component } from './component867.component';

describe('Component867Component', () => {
  let component: Component867Component;
  let fixture: ComponentFixture<Component867Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Component867Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Component867Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
