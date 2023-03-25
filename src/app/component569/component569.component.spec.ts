import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Component569Component } from './component569.component';

describe('Component569Component', () => {
  let component: Component569Component;
  let fixture: ComponentFixture<Component569Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Component569Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Component569Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
