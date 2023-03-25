import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Component778Component } from './component778.component';

describe('Component778Component', () => {
  let component: Component778Component;
  let fixture: ComponentFixture<Component778Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Component778Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Component778Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
