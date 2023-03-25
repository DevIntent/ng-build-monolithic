import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Component355Component } from './component355.component';

describe('Component355Component', () => {
  let component: Component355Component;
  let fixture: ComponentFixture<Component355Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Component355Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Component355Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
