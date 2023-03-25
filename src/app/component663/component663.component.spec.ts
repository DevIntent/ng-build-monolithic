import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Component663Component } from './component663.component';

describe('Component663Component', () => {
  let component: Component663Component;
  let fixture: ComponentFixture<Component663Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Component663Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Component663Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
