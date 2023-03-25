import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Component546Component } from './component546.component';

describe('Component546Component', () => {
  let component: Component546Component;
  let fixture: ComponentFixture<Component546Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Component546Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Component546Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
