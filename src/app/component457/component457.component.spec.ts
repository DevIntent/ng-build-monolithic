import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Component457Component } from './component457.component';

describe('Component457Component', () => {
  let component: Component457Component;
  let fixture: ComponentFixture<Component457Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Component457Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Component457Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
