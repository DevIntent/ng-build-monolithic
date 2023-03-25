import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Component364Component } from './component364.component';

describe('Component364Component', () => {
  let component: Component364Component;
  let fixture: ComponentFixture<Component364Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Component364Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Component364Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
