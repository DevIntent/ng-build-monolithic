import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Component718Component } from './component718.component';

describe('Component718Component', () => {
  let component: Component718Component;
  let fixture: ComponentFixture<Component718Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Component718Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Component718Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
