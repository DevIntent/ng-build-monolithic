import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Component773Component } from './component773.component';

describe('Component773Component', () => {
  let component: Component773Component;
  let fixture: ComponentFixture<Component773Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Component773Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Component773Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
