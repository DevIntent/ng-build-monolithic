import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Component616Component } from './component616.component';

describe('Component616Component', () => {
  let component: Component616Component;
  let fixture: ComponentFixture<Component616Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Component616Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Component616Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
