import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Component655Component } from './component655.component';

describe('Component655Component', () => {
  let component: Component655Component;
  let fixture: ComponentFixture<Component655Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Component655Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Component655Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
