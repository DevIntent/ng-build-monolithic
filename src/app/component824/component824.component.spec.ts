import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Component824Component } from './component824.component';

describe('Component824Component', () => {
  let component: Component824Component;
  let fixture: ComponentFixture<Component824Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Component824Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Component824Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
