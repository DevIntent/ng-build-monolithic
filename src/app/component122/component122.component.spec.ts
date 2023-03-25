import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Component122Component } from './component122.component';

describe('Component122Component', () => {
  let component: Component122Component;
  let fixture: ComponentFixture<Component122Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Component122Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Component122Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
