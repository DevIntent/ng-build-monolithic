import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Component882Component } from './component882.component';

describe('Component882Component', () => {
  let component: Component882Component;
  let fixture: ComponentFixture<Component882Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Component882Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Component882Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
