import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Component665Component } from './component665.component';

describe('Component665Component', () => {
  let component: Component665Component;
  let fixture: ComponentFixture<Component665Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Component665Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Component665Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
