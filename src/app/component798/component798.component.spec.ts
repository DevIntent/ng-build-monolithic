import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Component798Component } from './component798.component';

describe('Component798Component', () => {
  let component: Component798Component;
  let fixture: ComponentFixture<Component798Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Component798Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Component798Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
