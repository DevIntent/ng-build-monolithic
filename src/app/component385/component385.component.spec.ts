import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Component385Component } from './component385.component';

describe('Component385Component', () => {
  let component: Component385Component;
  let fixture: ComponentFixture<Component385Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Component385Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Component385Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
