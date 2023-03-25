import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Component837Component } from './component837.component';

describe('Component837Component', () => {
  let component: Component837Component;
  let fixture: ComponentFixture<Component837Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Component837Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Component837Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
