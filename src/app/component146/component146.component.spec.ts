import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Component146Component } from './component146.component';

describe('Component146Component', () => {
  let component: Component146Component;
  let fixture: ComponentFixture<Component146Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Component146Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Component146Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
