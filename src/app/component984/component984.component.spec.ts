import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Component984Component } from './component984.component';

describe('Component984Component', () => {
  let component: Component984Component;
  let fixture: ComponentFixture<Component984Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Component984Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Component984Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
