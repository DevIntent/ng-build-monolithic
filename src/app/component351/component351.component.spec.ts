import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Component351Component } from './component351.component';

describe('Component351Component', () => {
  let component: Component351Component;
  let fixture: ComponentFixture<Component351Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Component351Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Component351Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
