import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Component901Component } from './component901.component';

describe('Component901Component', () => {
  let component: Component901Component;
  let fixture: ComponentFixture<Component901Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Component901Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Component901Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
