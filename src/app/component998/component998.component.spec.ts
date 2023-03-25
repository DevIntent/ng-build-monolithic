import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Component998Component } from './component998.component';

describe('Component998Component', () => {
  let component: Component998Component;
  let fixture: ComponentFixture<Component998Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Component998Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Component998Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
