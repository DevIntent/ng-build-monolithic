import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Component261Component } from './component261.component';

describe('Component261Component', () => {
  let component: Component261Component;
  let fixture: ComponentFixture<Component261Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Component261Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Component261Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
