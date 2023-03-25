import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Component775Component } from './component775.component';

describe('Component775Component', () => {
  let component: Component775Component;
  let fixture: ComponentFixture<Component775Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Component775Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Component775Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
