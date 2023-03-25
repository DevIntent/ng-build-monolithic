import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Component357Component } from './component357.component';

describe('Component357Component', () => {
  let component: Component357Component;
  let fixture: ComponentFixture<Component357Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Component357Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Component357Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
