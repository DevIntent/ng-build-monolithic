import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Component125Component } from './component125.component';

describe('Component125Component', () => {
  let component: Component125Component;
  let fixture: ComponentFixture<Component125Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Component125Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Component125Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
