import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Component763Component } from './component763.component';

describe('Component763Component', () => {
  let component: Component763Component;
  let fixture: ComponentFixture<Component763Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Component763Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Component763Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
