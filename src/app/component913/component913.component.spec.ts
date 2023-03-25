import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Component913Component } from './component913.component';

describe('Component913Component', () => {
  let component: Component913Component;
  let fixture: ComponentFixture<Component913Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Component913Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Component913Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
