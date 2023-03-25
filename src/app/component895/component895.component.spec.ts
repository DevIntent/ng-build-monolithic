import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Component895Component } from './component895.component';

describe('Component895Component', () => {
  let component: Component895Component;
  let fixture: ComponentFixture<Component895Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Component895Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Component895Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
