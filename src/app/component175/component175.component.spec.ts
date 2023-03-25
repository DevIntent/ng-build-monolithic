import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Component175Component } from './component175.component';

describe('Component175Component', () => {
  let component: Component175Component;
  let fixture: ComponentFixture<Component175Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Component175Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Component175Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
