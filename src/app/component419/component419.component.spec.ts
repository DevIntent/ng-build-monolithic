import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Component419Component } from './component419.component';

describe('Component419Component', () => {
  let component: Component419Component;
  let fixture: ComponentFixture<Component419Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Component419Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Component419Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
