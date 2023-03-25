import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Component841Component } from './component841.component';

describe('Component841Component', () => {
  let component: Component841Component;
  let fixture: ComponentFixture<Component841Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Component841Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Component841Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
