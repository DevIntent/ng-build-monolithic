import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Component428Component } from './component428.component';

describe('Component428Component', () => {
  let component: Component428Component;
  let fixture: ComponentFixture<Component428Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Component428Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Component428Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
