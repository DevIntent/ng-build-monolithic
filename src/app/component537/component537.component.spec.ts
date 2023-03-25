import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Component537Component } from './component537.component';

describe('Component537Component', () => {
  let component: Component537Component;
  let fixture: ComponentFixture<Component537Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Component537Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Component537Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
