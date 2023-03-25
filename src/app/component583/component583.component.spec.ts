import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Component583Component } from './component583.component';

describe('Component583Component', () => {
  let component: Component583Component;
  let fixture: ComponentFixture<Component583Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Component583Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Component583Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
