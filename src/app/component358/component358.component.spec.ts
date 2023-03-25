import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Component358Component } from './component358.component';

describe('Component358Component', () => {
  let component: Component358Component;
  let fixture: ComponentFixture<Component358Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Component358Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Component358Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
