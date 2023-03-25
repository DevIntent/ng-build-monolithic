import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Component280Component } from './component280.component';

describe('Component280Component', () => {
  let component: Component280Component;
  let fixture: ComponentFixture<Component280Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Component280Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Component280Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
