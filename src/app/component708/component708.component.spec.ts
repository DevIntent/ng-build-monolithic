import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Component708Component } from './component708.component';

describe('Component708Component', () => {
  let component: Component708Component;
  let fixture: ComponentFixture<Component708Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Component708Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Component708Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
