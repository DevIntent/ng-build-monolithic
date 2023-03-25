import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Component897Component } from './component897.component';

describe('Component897Component', () => {
  let component: Component897Component;
  let fixture: ComponentFixture<Component897Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Component897Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Component897Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
