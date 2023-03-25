import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Component478Component } from './component478.component';

describe('Component478Component', () => {
  let component: Component478Component;
  let fixture: ComponentFixture<Component478Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Component478Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Component478Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
