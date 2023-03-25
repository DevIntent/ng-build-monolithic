import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Component414Component } from './component414.component';

describe('Component414Component', () => {
  let component: Component414Component;
  let fixture: ComponentFixture<Component414Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Component414Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Component414Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
