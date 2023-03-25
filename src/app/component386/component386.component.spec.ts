import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Component386Component } from './component386.component';

describe('Component386Component', () => {
  let component: Component386Component;
  let fixture: ComponentFixture<Component386Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Component386Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Component386Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
