import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Component983Component } from './component983.component';

describe('Component983Component', () => {
  let component: Component983Component;
  let fixture: ComponentFixture<Component983Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Component983Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Component983Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
