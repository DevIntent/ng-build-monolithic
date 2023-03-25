import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Component667Component } from './component667.component';

describe('Component667Component', () => {
  let component: Component667Component;
  let fixture: ComponentFixture<Component667Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Component667Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Component667Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
