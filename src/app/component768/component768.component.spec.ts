import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Component768Component } from './component768.component';

describe('Component768Component', () => {
  let component: Component768Component;
  let fixture: ComponentFixture<Component768Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Component768Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Component768Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
