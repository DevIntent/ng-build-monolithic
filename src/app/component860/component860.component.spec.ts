import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Component860Component } from './component860.component';

describe('Component860Component', () => {
  let component: Component860Component;
  let fixture: ComponentFixture<Component860Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Component860Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Component860Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
