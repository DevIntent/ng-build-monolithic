import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Component202Component } from './component202.component';

describe('Component202Component', () => {
  let component: Component202Component;
  let fixture: ComponentFixture<Component202Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Component202Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Component202Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
