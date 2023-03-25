import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Component396Component } from './component396.component';

describe('Component396Component', () => {
  let component: Component396Component;
  let fixture: ComponentFixture<Component396Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Component396Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Component396Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
