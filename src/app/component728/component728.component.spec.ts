import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Component728Component } from './component728.component';

describe('Component728Component', () => {
  let component: Component728Component;
  let fixture: ComponentFixture<Component728Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Component728Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Component728Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
