import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Component304Component } from './component304.component';

describe('Component304Component', () => {
  let component: Component304Component;
  let fixture: ComponentFixture<Component304Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Component304Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Component304Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
