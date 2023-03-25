import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Component433Component } from './component433.component';

describe('Component433Component', () => {
  let component: Component433Component;
  let fixture: ComponentFixture<Component433Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Component433Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Component433Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
