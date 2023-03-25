import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Component861Component } from './component861.component';

describe('Component861Component', () => {
  let component: Component861Component;
  let fixture: ComponentFixture<Component861Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Component861Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Component861Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
