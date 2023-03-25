import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Component76Component } from './component76.component';

describe('Component76Component', () => {
  let component: Component76Component;
  let fixture: ComponentFixture<Component76Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Component76Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Component76Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
