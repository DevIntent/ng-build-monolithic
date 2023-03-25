import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Component849Component } from './component849.component';

describe('Component849Component', () => {
  let component: Component849Component;
  let fixture: ComponentFixture<Component849Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Component849Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Component849Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
