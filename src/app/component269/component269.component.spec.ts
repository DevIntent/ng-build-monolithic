import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Component269Component } from './component269.component';

describe('Component269Component', () => {
  let component: Component269Component;
  let fixture: ComponentFixture<Component269Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Component269Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Component269Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
