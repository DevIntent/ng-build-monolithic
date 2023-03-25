import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Component941Component } from './component941.component';

describe('Component941Component', () => {
  let component: Component941Component;
  let fixture: ComponentFixture<Component941Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Component941Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Component941Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
