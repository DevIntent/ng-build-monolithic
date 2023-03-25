import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Component77Component } from './component77.component';

describe('Component77Component', () => {
  let component: Component77Component;
  let fixture: ComponentFixture<Component77Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Component77Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Component77Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
