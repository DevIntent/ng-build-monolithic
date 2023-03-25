import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Component326Component } from './component326.component';

describe('Component326Component', () => {
  let component: Component326Component;
  let fixture: ComponentFixture<Component326Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Component326Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Component326Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
