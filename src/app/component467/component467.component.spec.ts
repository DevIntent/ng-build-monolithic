import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Component467Component } from './component467.component';

describe('Component467Component', () => {
  let component: Component467Component;
  let fixture: ComponentFixture<Component467Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Component467Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Component467Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
