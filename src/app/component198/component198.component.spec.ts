import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Component198Component } from './component198.component';

describe('Component198Component', () => {
  let component: Component198Component;
  let fixture: ComponentFixture<Component198Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Component198Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Component198Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
