import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Component140Component } from './component140.component';

describe('Component140Component', () => {
  let component: Component140Component;
  let fixture: ComponentFixture<Component140Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Component140Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Component140Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
