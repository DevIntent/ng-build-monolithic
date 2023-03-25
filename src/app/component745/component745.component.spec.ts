import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Component745Component } from './component745.component';

describe('Component745Component', () => {
  let component: Component745Component;
  let fixture: ComponentFixture<Component745Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Component745Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Component745Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
