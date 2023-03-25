import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Component241Component } from './component241.component';

describe('Component241Component', () => {
  let component: Component241Component;
  let fixture: ComponentFixture<Component241Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Component241Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Component241Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
