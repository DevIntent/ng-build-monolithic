import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Component711Component } from './component711.component';

describe('Component711Component', () => {
  let component: Component711Component;
  let fixture: ComponentFixture<Component711Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Component711Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Component711Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
