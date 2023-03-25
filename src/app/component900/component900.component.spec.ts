import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Component900Component } from './component900.component';

describe('Component900Component', () => {
  let component: Component900Component;
  let fixture: ComponentFixture<Component900Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Component900Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Component900Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
