import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Component596Component } from './component596.component';

describe('Component596Component', () => {
  let component: Component596Component;
  let fixture: ComponentFixture<Component596Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Component596Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Component596Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
