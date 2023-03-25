import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Component953Component } from './component953.component';

describe('Component953Component', () => {
  let component: Component953Component;
  let fixture: ComponentFixture<Component953Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Component953Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Component953Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
