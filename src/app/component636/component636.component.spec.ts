import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Component636Component } from './component636.component';

describe('Component636Component', () => {
  let component: Component636Component;
  let fixture: ComponentFixture<Component636Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Component636Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Component636Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
