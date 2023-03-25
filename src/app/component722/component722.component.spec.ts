import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Component722Component } from './component722.component';

describe('Component722Component', () => {
  let component: Component722Component;
  let fixture: ComponentFixture<Component722Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Component722Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Component722Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
