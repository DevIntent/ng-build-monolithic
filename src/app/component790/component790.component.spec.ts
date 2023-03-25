import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Component790Component } from './component790.component';

describe('Component790Component', () => {
  let component: Component790Component;
  let fixture: ComponentFixture<Component790Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Component790Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Component790Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
