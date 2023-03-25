import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Component676Component } from './component676.component';

describe('Component676Component', () => {
  let component: Component676Component;
  let fixture: ComponentFixture<Component676Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Component676Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Component676Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
