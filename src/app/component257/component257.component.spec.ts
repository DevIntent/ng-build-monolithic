import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Component257Component } from './component257.component';

describe('Component257Component', () => {
  let component: Component257Component;
  let fixture: ComponentFixture<Component257Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Component257Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Component257Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
