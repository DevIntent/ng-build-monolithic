import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Component678Component } from './component678.component';

describe('Component678Component', () => {
  let component: Component678Component;
  let fixture: ComponentFixture<Component678Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Component678Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Component678Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
