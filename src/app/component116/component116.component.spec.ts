import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Component116Component } from './component116.component';

describe('Component116Component', () => {
  let component: Component116Component;
  let fixture: ComponentFixture<Component116Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Component116Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Component116Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
