import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Component701Component } from './component701.component';

describe('Component701Component', () => {
  let component: Component701Component;
  let fixture: ComponentFixture<Component701Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Component701Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Component701Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
