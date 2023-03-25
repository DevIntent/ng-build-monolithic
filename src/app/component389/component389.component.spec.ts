import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Component389Component } from './component389.component';

describe('Component389Component', () => {
  let component: Component389Component;
  let fixture: ComponentFixture<Component389Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Component389Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Component389Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
