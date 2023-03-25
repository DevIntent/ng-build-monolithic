import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Component506Component } from './component506.component';

describe('Component506Component', () => {
  let component: Component506Component;
  let fixture: ComponentFixture<Component506Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Component506Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Component506Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
