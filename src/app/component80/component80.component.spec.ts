import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Component80Component } from './component80.component';

describe('Component80Component', () => {
  let component: Component80Component;
  let fixture: ComponentFixture<Component80Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Component80Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Component80Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
