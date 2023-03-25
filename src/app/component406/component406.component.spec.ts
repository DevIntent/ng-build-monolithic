import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Component406Component } from './component406.component';

describe('Component406Component', () => {
  let component: Component406Component;
  let fixture: ComponentFixture<Component406Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Component406Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Component406Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
