import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Component381Component } from './component381.component';

describe('Component381Component', () => {
  let component: Component381Component;
  let fixture: ComponentFixture<Component381Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Component381Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Component381Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
