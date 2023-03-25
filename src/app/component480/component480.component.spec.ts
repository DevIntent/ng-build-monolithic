import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Component480Component } from './component480.component';

describe('Component480Component', () => {
  let component: Component480Component;
  let fixture: ComponentFixture<Component480Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Component480Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Component480Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
