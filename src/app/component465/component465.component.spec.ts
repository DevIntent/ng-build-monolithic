import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Component465Component } from './component465.component';

describe('Component465Component', () => {
  let component: Component465Component;
  let fixture: ComponentFixture<Component465Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Component465Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Component465Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
