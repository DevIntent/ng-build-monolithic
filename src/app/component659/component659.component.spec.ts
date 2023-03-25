import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Component659Component } from './component659.component';

describe('Component659Component', () => {
  let component: Component659Component;
  let fixture: ComponentFixture<Component659Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Component659Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Component659Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
