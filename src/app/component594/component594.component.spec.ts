import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Component594Component } from './component594.component';

describe('Component594Component', () => {
  let component: Component594Component;
  let fixture: ComponentFixture<Component594Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Component594Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Component594Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
