import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Component579Component } from './component579.component';

describe('Component579Component', () => {
  let component: Component579Component;
  let fixture: ComponentFixture<Component579Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Component579Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Component579Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
