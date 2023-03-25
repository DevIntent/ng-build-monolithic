import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Component200Component } from './component200.component';

describe('Component200Component', () => {
  let component: Component200Component;
  let fixture: ComponentFixture<Component200Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Component200Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Component200Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
