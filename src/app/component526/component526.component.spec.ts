import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Component526Component } from './component526.component';

describe('Component526Component', () => {
  let component: Component526Component;
  let fixture: ComponentFixture<Component526Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Component526Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Component526Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
