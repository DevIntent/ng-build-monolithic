import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Component771Component } from './component771.component';

describe('Component771Component', () => {
  let component: Component771Component;
  let fixture: ComponentFixture<Component771Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Component771Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Component771Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
