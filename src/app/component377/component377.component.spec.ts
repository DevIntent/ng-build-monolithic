import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Component377Component } from './component377.component';

describe('Component377Component', () => {
  let component: Component377Component;
  let fixture: ComponentFixture<Component377Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Component377Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Component377Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
