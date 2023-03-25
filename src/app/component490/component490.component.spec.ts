import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Component490Component } from './component490.component';

describe('Component490Component', () => {
  let component: Component490Component;
  let fixture: ComponentFixture<Component490Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Component490Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Component490Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
