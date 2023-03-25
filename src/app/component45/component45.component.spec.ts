import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Component45Component } from './component45.component';

describe('Component45Component', () => {
  let component: Component45Component;
  let fixture: ComponentFixture<Component45Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Component45Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Component45Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
