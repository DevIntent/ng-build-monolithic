import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Component453Component } from './component453.component';

describe('Component453Component', () => {
  let component: Component453Component;
  let fixture: ComponentFixture<Component453Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Component453Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Component453Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
