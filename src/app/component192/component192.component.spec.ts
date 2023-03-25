import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Component192Component } from './component192.component';

describe('Component192Component', () => {
  let component: Component192Component;
  let fixture: ComponentFixture<Component192Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Component192Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Component192Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
