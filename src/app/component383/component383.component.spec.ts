import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Component383Component } from './component383.component';

describe('Component383Component', () => {
  let component: Component383Component;
  let fixture: ComponentFixture<Component383Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Component383Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Component383Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
