import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Component865Component } from './component865.component';

describe('Component865Component', () => {
  let component: Component865Component;
  let fixture: ComponentFixture<Component865Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Component865Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Component865Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
