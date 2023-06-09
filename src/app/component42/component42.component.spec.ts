import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Component42Component } from './component42.component';

describe('Component42Component', () => {
  let component: Component42Component;
  let fixture: ComponentFixture<Component42Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Component42Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Component42Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
