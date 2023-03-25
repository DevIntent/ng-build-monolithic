import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Component494Component } from './component494.component';

describe('Component494Component', () => {
  let component: Component494Component;
  let fixture: ComponentFixture<Component494Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Component494Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Component494Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
