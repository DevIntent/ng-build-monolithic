import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Component225Component } from './component225.component';

describe('Component225Component', () => {
  let component: Component225Component;
  let fixture: ComponentFixture<Component225Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Component225Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Component225Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
