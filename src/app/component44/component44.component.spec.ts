import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Component44Component } from './component44.component';

describe('Component44Component', () => {
  let component: Component44Component;
  let fixture: ComponentFixture<Component44Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Component44Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Component44Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
