import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Component898Component } from './component898.component';

describe('Component898Component', () => {
  let component: Component898Component;
  let fixture: ComponentFixture<Component898Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Component898Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Component898Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
