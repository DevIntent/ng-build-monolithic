import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Component180Component } from './component180.component';

describe('Component180Component', () => {
  let component: Component180Component;
  let fixture: ComponentFixture<Component180Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Component180Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Component180Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
