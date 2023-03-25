import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Component981Component } from './component981.component';

describe('Component981Component', () => {
  let component: Component981Component;
  let fixture: ComponentFixture<Component981Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Component981Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Component981Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
