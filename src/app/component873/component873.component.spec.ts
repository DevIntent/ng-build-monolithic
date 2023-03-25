import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Component873Component } from './component873.component';

describe('Component873Component', () => {
  let component: Component873Component;
  let fixture: ComponentFixture<Component873Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Component873Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Component873Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
