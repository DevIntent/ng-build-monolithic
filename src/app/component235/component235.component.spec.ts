import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Component235Component } from './component235.component';

describe('Component235Component', () => {
  let component: Component235Component;
  let fixture: ComponentFixture<Component235Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Component235Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Component235Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
