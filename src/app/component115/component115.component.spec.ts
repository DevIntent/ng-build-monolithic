import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Component115Component } from './component115.component';

describe('Component115Component', () => {
  let component: Component115Component;
  let fixture: ComponentFixture<Component115Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Component115Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Component115Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
