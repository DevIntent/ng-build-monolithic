import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Component878Component } from './component878.component';

describe('Component878Component', () => {
  let component: Component878Component;
  let fixture: ComponentFixture<Component878Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Component878Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Component878Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
