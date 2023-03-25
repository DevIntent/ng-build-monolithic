import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Component814Component } from './component814.component';

describe('Component814Component', () => {
  let component: Component814Component;
  let fixture: ComponentFixture<Component814Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Component814Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Component814Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
