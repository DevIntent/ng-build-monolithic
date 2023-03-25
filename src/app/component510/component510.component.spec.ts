import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Component510Component } from './component510.component';

describe('Component510Component', () => {
  let component: Component510Component;
  let fixture: ComponentFixture<Component510Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Component510Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Component510Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
