import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Component216Component } from './component216.component';

describe('Component216Component', () => {
  let component: Component216Component;
  let fixture: ComponentFixture<Component216Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Component216Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Component216Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
