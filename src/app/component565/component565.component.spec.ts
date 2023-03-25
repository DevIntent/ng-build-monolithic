import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Component565Component } from './component565.component';

describe('Component565Component', () => {
  let component: Component565Component;
  let fixture: ComponentFixture<Component565Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Component565Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Component565Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
