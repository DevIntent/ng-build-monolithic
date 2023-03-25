import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Component567Component } from './component567.component';

describe('Component567Component', () => {
  let component: Component567Component;
  let fixture: ComponentFixture<Component567Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Component567Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Component567Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
