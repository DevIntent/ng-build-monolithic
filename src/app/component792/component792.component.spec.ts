import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Component792Component } from './component792.component';

describe('Component792Component', () => {
  let component: Component792Component;
  let fixture: ComponentFixture<Component792Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Component792Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Component792Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
