import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Component905Component } from './component905.component';

describe('Component905Component', () => {
  let component: Component905Component;
  let fixture: ComponentFixture<Component905Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Component905Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Component905Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
