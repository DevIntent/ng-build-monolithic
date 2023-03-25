import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Component973Component } from './component973.component';

describe('Component973Component', () => {
  let component: Component973Component;
  let fixture: ComponentFixture<Component973Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Component973Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Component973Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
