import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Component908Component } from './component908.component';

describe('Component908Component', () => {
  let component: Component908Component;
  let fixture: ComponentFixture<Component908Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Component908Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Component908Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
