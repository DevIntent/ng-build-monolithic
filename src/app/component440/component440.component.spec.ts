import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Component440Component } from './component440.component';

describe('Component440Component', () => {
  let component: Component440Component;
  let fixture: ComponentFixture<Component440Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Component440Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Component440Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
