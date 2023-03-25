import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Component71Component } from './component71.component';

describe('Component71Component', () => {
  let component: Component71Component;
  let fixture: ComponentFixture<Component71Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Component71Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Component71Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
