import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Component106Component } from './component106.component';

describe('Component106Component', () => {
  let component: Component106Component;
  let fixture: ComponentFixture<Component106Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Component106Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Component106Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
