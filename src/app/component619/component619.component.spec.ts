import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Component619Component } from './component619.component';

describe('Component619Component', () => {
  let component: Component619Component;
  let fixture: ComponentFixture<Component619Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Component619Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Component619Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
