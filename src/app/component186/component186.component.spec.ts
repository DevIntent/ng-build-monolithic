import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Component186Component } from './component186.component';

describe('Component186Component', () => {
  let component: Component186Component;
  let fixture: ComponentFixture<Component186Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Component186Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Component186Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
