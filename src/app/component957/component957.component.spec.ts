import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Component957Component } from './component957.component';

describe('Component957Component', () => {
  let component: Component957Component;
  let fixture: ComponentFixture<Component957Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Component957Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Component957Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
