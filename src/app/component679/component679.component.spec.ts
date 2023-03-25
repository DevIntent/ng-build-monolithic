import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Component679Component } from './component679.component';

describe('Component679Component', () => {
  let component: Component679Component;
  let fixture: ComponentFixture<Component679Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Component679Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Component679Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
