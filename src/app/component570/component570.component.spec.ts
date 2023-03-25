import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Component570Component } from './component570.component';

describe('Component570Component', () => {
  let component: Component570Component;
  let fixture: ComponentFixture<Component570Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Component570Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Component570Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
