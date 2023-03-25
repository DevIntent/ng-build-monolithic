import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Component832Component } from './component832.component';

describe('Component832Component', () => {
  let component: Component832Component;
  let fixture: ComponentFixture<Component832Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Component832Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Component832Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
