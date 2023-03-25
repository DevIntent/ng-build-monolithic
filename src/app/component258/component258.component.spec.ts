import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Component258Component } from './component258.component';

describe('Component258Component', () => {
  let component: Component258Component;
  let fixture: ComponentFixture<Component258Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Component258Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Component258Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
