import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Component640Component } from './component640.component';

describe('Component640Component', () => {
  let component: Component640Component;
  let fixture: ComponentFixture<Component640Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Component640Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Component640Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
