import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Component986Component } from './component986.component';

describe('Component986Component', () => {
  let component: Component986Component;
  let fixture: ComponentFixture<Component986Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Component986Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Component986Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
