import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Component282Component } from './component282.component';

describe('Component282Component', () => {
  let component: Component282Component;
  let fixture: ComponentFixture<Component282Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Component282Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Component282Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
