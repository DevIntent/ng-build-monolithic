import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Component72Component } from './component72.component';

describe('Component72Component', () => {
  let component: Component72Component;
  let fixture: ComponentFixture<Component72Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Component72Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Component72Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
