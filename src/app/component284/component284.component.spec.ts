import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Component284Component } from './component284.component';

describe('Component284Component', () => {
  let component: Component284Component;
  let fixture: ComponentFixture<Component284Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Component284Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Component284Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
