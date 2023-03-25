import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Component511Component } from './component511.component';

describe('Component511Component', () => {
  let component: Component511Component;
  let fixture: ComponentFixture<Component511Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Component511Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Component511Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
