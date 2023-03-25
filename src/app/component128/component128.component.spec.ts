import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Component128Component } from './component128.component';

describe('Component128Component', () => {
  let component: Component128Component;
  let fixture: ComponentFixture<Component128Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Component128Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Component128Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
