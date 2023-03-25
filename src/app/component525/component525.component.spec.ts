import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Component525Component } from './component525.component';

describe('Component525Component', () => {
  let component: Component525Component;
  let fixture: ComponentFixture<Component525Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Component525Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Component525Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
