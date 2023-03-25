import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Component672Component } from './component672.component';

describe('Component672Component', () => {
  let component: Component672Component;
  let fixture: ComponentFixture<Component672Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Component672Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Component672Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
