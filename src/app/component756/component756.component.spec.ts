import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Component756Component } from './component756.component';

describe('Component756Component', () => {
  let component: Component756Component;
  let fixture: ComponentFixture<Component756Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Component756Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Component756Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
