import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Component130Component } from './component130.component';

describe('Component130Component', () => {
  let component: Component130Component;
  let fixture: ComponentFixture<Component130Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Component130Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Component130Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
