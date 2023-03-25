import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Component524Component } from './component524.component';

describe('Component524Component', () => {
  let component: Component524Component;
  let fixture: ComponentFixture<Component524Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Component524Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Component524Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
