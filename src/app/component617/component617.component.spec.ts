import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Component617Component } from './component617.component';

describe('Component617Component', () => {
  let component: Component617Component;
  let fixture: ComponentFixture<Component617Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Component617Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Component617Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
