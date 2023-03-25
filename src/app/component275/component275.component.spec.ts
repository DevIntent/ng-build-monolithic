import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Component275Component } from './component275.component';

describe('Component275Component', () => {
  let component: Component275Component;
  let fixture: ComponentFixture<Component275Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Component275Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Component275Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
