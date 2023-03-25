import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Component398Component } from './component398.component';

describe('Component398Component', () => {
  let component: Component398Component;
  let fixture: ComponentFixture<Component398Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Component398Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Component398Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
