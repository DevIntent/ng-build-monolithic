import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Component70Component } from './component70.component';

describe('Component70Component', () => {
  let component: Component70Component;
  let fixture: ComponentFixture<Component70Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Component70Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Component70Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
