import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Component628Component } from './component628.component';

describe('Component628Component', () => {
  let component: Component628Component;
  let fixture: ComponentFixture<Component628Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Component628Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Component628Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
