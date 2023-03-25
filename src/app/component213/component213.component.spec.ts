import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Component213Component } from './component213.component';

describe('Component213Component', () => {
  let component: Component213Component;
  let fixture: ComponentFixture<Component213Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Component213Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Component213Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
