import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Component857Component } from './component857.component';

describe('Component857Component', () => {
  let component: Component857Component;
  let fixture: ComponentFixture<Component857Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Component857Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Component857Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
