import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Component593Component } from './component593.component';

describe('Component593Component', () => {
  let component: Component593Component;
  let fixture: ComponentFixture<Component593Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Component593Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Component593Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
