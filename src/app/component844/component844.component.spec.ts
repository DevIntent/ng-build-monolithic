import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Component844Component } from './component844.component';

describe('Component844Component', () => {
  let component: Component844Component;
  let fixture: ComponentFixture<Component844Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Component844Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Component844Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
