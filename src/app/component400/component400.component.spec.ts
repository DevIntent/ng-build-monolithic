import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Component400Component } from './component400.component';

describe('Component400Component', () => {
  let component: Component400Component;
  let fixture: ComponentFixture<Component400Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Component400Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Component400Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
