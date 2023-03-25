import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Component75Component } from './component75.component';

describe('Component75Component', () => {
  let component: Component75Component;
  let fixture: ComponentFixture<Component75Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Component75Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Component75Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
