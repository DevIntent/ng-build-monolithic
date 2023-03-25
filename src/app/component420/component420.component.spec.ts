import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Component420Component } from './component420.component';

describe('Component420Component', () => {
  let component: Component420Component;
  let fixture: ComponentFixture<Component420Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Component420Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Component420Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
