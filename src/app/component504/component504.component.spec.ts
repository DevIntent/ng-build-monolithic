import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Component504Component } from './component504.component';

describe('Component504Component', () => {
  let component: Component504Component;
  let fixture: ComponentFixture<Component504Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Component504Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Component504Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
