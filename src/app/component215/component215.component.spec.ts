import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Component215Component } from './component215.component';

describe('Component215Component', () => {
  let component: Component215Component;
  let fixture: ComponentFixture<Component215Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Component215Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Component215Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
