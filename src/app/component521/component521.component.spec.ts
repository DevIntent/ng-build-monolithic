import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Component521Component } from './component521.component';

describe('Component521Component', () => {
  let component: Component521Component;
  let fixture: ComponentFixture<Component521Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Component521Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Component521Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
