import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Component733Component } from './component733.component';

describe('Component733Component', () => {
  let component: Component733Component;
  let fixture: ComponentFixture<Component733Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Component733Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Component733Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
