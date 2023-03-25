import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Component968Component } from './component968.component';

describe('Component968Component', () => {
  let component: Component968Component;
  let fixture: ComponentFixture<Component968Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Component968Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Component968Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
