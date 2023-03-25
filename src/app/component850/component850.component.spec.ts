import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Component850Component } from './component850.component';

describe('Component850Component', () => {
  let component: Component850Component;
  let fixture: ComponentFixture<Component850Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Component850Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Component850Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
