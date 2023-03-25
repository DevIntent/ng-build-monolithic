import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Component950Component } from './component950.component';

describe('Component950Component', () => {
  let component: Component950Component;
  let fixture: ComponentFixture<Component950Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Component950Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Component950Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
