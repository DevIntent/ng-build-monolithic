import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Component939Component } from './component939.component';

describe('Component939Component', () => {
  let component: Component939Component;
  let fixture: ComponentFixture<Component939Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Component939Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Component939Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
