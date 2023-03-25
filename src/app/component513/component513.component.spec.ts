import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Component513Component } from './component513.component';

describe('Component513Component', () => {
  let component: Component513Component;
  let fixture: ComponentFixture<Component513Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Component513Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Component513Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
