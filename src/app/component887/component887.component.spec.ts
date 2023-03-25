import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Component887Component } from './component887.component';

describe('Component887Component', () => {
  let component: Component887Component;
  let fixture: ComponentFixture<Component887Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Component887Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Component887Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
