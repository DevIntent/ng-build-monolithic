import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Component560Component } from './component560.component';

describe('Component560Component', () => {
  let component: Component560Component;
  let fixture: ComponentFixture<Component560Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Component560Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Component560Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
