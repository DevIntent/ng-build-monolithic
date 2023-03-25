import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Component222Component } from './component222.component';

describe('Component222Component', () => {
  let component: Component222Component;
  let fixture: ComponentFixture<Component222Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Component222Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Component222Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
