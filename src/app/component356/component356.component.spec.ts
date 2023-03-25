import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Component356Component } from './component356.component';

describe('Component356Component', () => {
  let component: Component356Component;
  let fixture: ComponentFixture<Component356Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Component356Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Component356Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
